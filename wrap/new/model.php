<?php

trait Model
{

    use Database;

    public function find_all()
    {

        $query = "SELECT * FROM $this->table";
        return $this->query($query);
    }

    public function find_all_order_by($column_name, $order_type = 'DESC')
    {

        $query = "SELECT * FROM $this->table ORDER BY $column_name $order_type";
        return $this->query($query);
    }


    public function find_all_group($column_name,  $data = [], $data_not = [])
    {

        $query = "SELECT * FROM $this->table";

        if (!empty($data) || !empty($data_not)) {
            $query .= " WHERE ";
            $keys = array_keys($data);
            $keys_not = array_keys($data_not);
            foreach ($keys as $key) {
                $query .= "$key = :$key && ";
            }
            foreach ($keys_not as $key) {
                $query .= "$key != :$key && ";
            }
            $query = trim($query, " && ");
        }

        $query .= " GROUP BY $column_name";

        return $this->query($query);
    }

    public function find_all_limit($data = [], $data_not = [], $limit = 10, $offset = 0, $column_name, $order_type = 'DESC')
    {

        $query = "SELECT * FROM $this->table";

        if (!empty($data) || !empty($data_not)) {
            $query .= " WHERE ";
            $keys = array_keys($data);
            $keys_not = array_keys($data_not);
            foreach ($keys as $key) {
                $query .= "$key = :$key && ";
            }
            foreach ($keys_not as $key) {
                $query .= "$key != :$key && ";
            }
            $query = trim($query, " && ");
        }

        $query .= " ORDER BY $column_name $order_type LIMIT $limit OFFSET $offset";

        $data = array_merge($data, $data_not);

        $result =  $this->query($query, $data);
        return $result;
    }

    public function count_column(string $column_name, string $order_type = 'DESC', array $data = [], array $data_not = [])
    {

        $query = "SELECT $column_name, COUNT(*) as count FROM $this->table";

        if (!empty($data) || !empty($data_not)) {
            $query .= " WHERE ";
            $keys = array_keys($data);
            $keys_not = array_keys($data_not);
            foreach ($keys as $key) {
                $query .= "$key = :$key && ";
            }
            foreach ($keys_not as $key) {
                $query .= "$key != :$key && ";
            }
            $query = trim($query, " && ");
        }

        $query .= " GROUP BY $column_name HAVING COUNT(*) > 0 ORDER BY count $order_type";

        $data = array_merge($data, $data_not);
        if (is_array($this->query($query, $data))) {
            return $this->query($query, $data);
        } else {
        }
        return [];
    }


    public function where($data, $data_not = [])
    {

        $query = "SELECT * FROM $this->table WHERE ";
        $keys = array_keys($data);
        $keys_not = array_keys($data_not);
        foreach ($keys as $key) {
            $query .= "$key = :$key && ";
        }
        foreach ($keys_not as $key) {
            $query .= "$key != :$key && ";
        }
        $query = trim($query, " && ");

        $data = array_merge($data, $data_not);

        if (is_array($this->query($query, $data))) {
            return $this->query($query, $data);
        } else {
        }
        return [];
    }

    public function where_limit($data, $data_not = [], $limit = 10, $offset = 0)
    {

        $query = "SELECT * FROM $this->table WHERE ";
        $keys = array_keys($data);
        $keys_not = array_keys($data_not);
        foreach ($keys as $key) {
            $query .= "$key = :$key && ";
        }
        foreach ($keys_not as $key) {
            $query .= "$key != :$key && ";
        }
        $query = trim($query, " && ");
        $query .= " LIMIT $limit OFFSET $offset";

        $data = array_merge($data, $data_not);
        return $this->query($query, $data);
    }

    public function where_interval($data, $data_not = [], $column_name, $inverval)
    {
        $query = "SELECT * FROM $this->table WHERE ";
        $keys = array_keys($data);
        $keys_not = array_keys($data_not);
        foreach ($keys as $key) {
            $query .= "$key = :$key && ";
        }
        foreach ($keys_not as $key) {
            $query .= "$key != :$key && ";
        }
        $query .= "$column_name between date_sub(now(),INTERVAL $inverval) and now()";
        $query = trim($query, " && ");

        $data = array_merge($data, $data_not);
        $result = $this->query($query, $data);
        if (is_array($result)) {
            return $result;
        }
        return [];
    }

    public function where_interval_quantity($inverval)
    {
        $query = "SELECT SUM(d.order_quantity) as total FROM order_details as d JOIN orders as o on o.order_id = d.order_details_id WHERE o.date_timestamp between date_sub(now(),INTERVAL " . $inverval . ") and now()";

        return $this->query($query)[0]->total;
    }

    public function total($column_name, $data, $data_not = [])
    {
        $query = "SELECT SUM($column_name) as total FROM $this->table";

        if (!empty($data) || !empty($data_not)) {
            $query .= " WHERE ";
            $keys = array_keys($data);
            $keys_not = array_keys($data_not);
            foreach ($keys as $key) {
                $query .= "$key = :$key && ";
            }
            foreach ($keys_not as $key) {
                $query .= "$key != :$key && ";
            }
            $query = trim($query, " && ");
        }

        $data = array_merge($data, $data_not);
        $result = $this->query($query, $data);

        return $result[0]->total;
    }

    public function where_interval_specific($data, $data_not = [], $column_name, $inverval1, $inverval2)
    {
        $query = "SELECT * FROM $this->table WHERE ";
        $keys = array_keys($data);
        $keys_not = array_keys($data_not);
        foreach ($keys as $key) {
            $query .= "$key = :$key && ";
        }
        foreach ($keys_not as $key) {
            $query .= "$key != :$key && ";
        }
        $query = trim($query, " && ");
        $query .= "$column_name between date_sub(now(),INTERVAL $inverval1) and date_sub(now(),INTERVAL $inverval2)";

        $data = array_merge($data, $data_not);
        return $this->query($query, $data);
    }


    public function get_order_quantity_by_date($menu, $date)
    {
        $query = "SELECT SUM(d.order_quantity) as quantity 
                    FROM orders as o 
                    JOIN order_details as d 
                    ON o.order_id = d.order_id 
                    WHERE SUBSTRING_INDEX(date_timestamp,' ', 1) = '" . $date . "' 
                    AND menu = '" . $menu . "'";

        if ($this->query($query)[0]->quantity) {
            return $this->query($query)[0]->quantity;
        }
        return 0;
    }


    public function get_order_summary_by_date($date1, $date2 = null)
    {
        $query = "SELECT  d.menu, c.category_order, c.category_name, SUM(d.order_quantity) as quantity, SUM(d.order_amount) as amount
        FROM orders as o 
        JOIN order_details as d ON o.order_id = d.order_id     
        JOIN categories as c ON d.category = c.category_name                    
        WHERE SUBSTRING_INDEX(date_timestamp,' ', 1) BETWEEN '$date1'";

        if ($date2 != null || $date2 == "") {
            $query .= "AND '$date2'";
        }

        //$query .= "GROUP BY d.menu ORDER BY o.date_timestamp";

        $query .= "GROUP BY d.menu ORDER BY c.category_order, d.menu";

        return $this->query($query);
    }

    public function get_category_summary_by_date($date1, $date2 = null)
    {
        $query = "SELECT d.category, d.menu, o.order_id, d.order_id, c.category_order, c.category_name, SUM(d.order_quantity) as quantity, SUM(d.order_amount) as amount
        FROM orders as o 
        JOIN order_details as d ON o.order_id = d.order_id  
        JOIN categories as c ON d.category = c.category_name                                  
        WHERE SUBSTRING_INDEX(date_timestamp,' ', 1) BETWEEN '$date1'";

        if ($date2 != null || $date2 == "") {
            $query .= "AND '$date2'";
        }

        //$query .= "GROUP BY d.category ORDER BY o.date_timestamp";

        $query .= "GROUP BY d.category ORDER BY c.category_order";

        return $this->query($query);
    }



    public function get_list_by_date_range($date1, $date2 = null)
    {
        $query = "SELECT * FROM orders as o JOIN order_details as d 
                    ON o.order_id = d.order_id
                    WHERE SUBSTRING_INDEX(date_timestamp,' ', 1) BETWEEN '$date1'";

        if ($date2 != null || $date2 == "") {
            $query .= "AND '$date2'";
        }

        $query .= "ORDER BY o.order_id desc";

        return $this->query($query);
    }

    public function where_interval_specific_total($sum_column_name, $data, $data_not = [], $column_name, $inverval1, $inverval2)
    {
        $query = "SELECT SUM($sum_column_name) as total FROM $this->table WHERE ";
        $keys = array_keys($data);
        $keys_not = array_keys($data_not);
        foreach ($keys as $key) {
            $query .= "$key = :$key && ";
        }
        foreach ($keys_not as $key) {
            $query .= "$key != :$key && ";
        }
        $query .= "$column_name between date_sub(now(),INTERVAL $inverval1) and date_sub(now(),INTERVAL $inverval2)";
        $query = trim($query, " && ");

        $data = array_merge($data, $data_not);
        $result = $this->query($query, $data);
        return $result[0]->total;
    }

    public function first($data = [], $data_not = [], $column_name = null, $order_type = 'DESC')
    {

        $query = "SELECT * FROM $this->table";

        if (!empty($data) || !empty($data_not)) {
            $query .= " WHERE ";
            $keys = array_keys($data);
            $keys_not = array_keys($data_not);
            foreach ($keys as $key) {
                $query .= "$key = :$key && ";
            }
            foreach ($keys_not as $key) {
                $query .= "$key != :$key && ";
            }
            $query = trim($query, " && ");
        }

        if ($column_name) {
            $query .= " ORDER BY $column_name $order_type";
        }

        $data = array_merge($data, $data_not);

        $result =  $this->query($query, $data);
        return $result[0];
    }


    public function delete($id, $id_column = 'id')
    {
        $query = "DELETE FROM $this->table WHERE $id_column = :$id_column";

        $data[$id_column] = $id;

        return $this->query($query, $data);
    }

    public function insert($data)
    {

        // remove unwanted data
        if (!empty($this->allowedColumns)) {
            foreach ($data as $key => $value) {
                if (!in_array($key, $this->allowedColumns)) {
                    unset($data[$key]);
                }
            }
        }
        $keys = array_keys($data);

        $query = "INSERT INTO $this->table (" . implode(",", $keys) . ") VALUES (:" . implode(",:", $keys) . " )";

        return $this->query($query, $data);
    }

    public function update(array $data, int $id, string $id_column = 'id')
    {

        // remove unwanted data
        if (!empty($this->allowedColumns)) {
            foreach ($data as $key => $value) {
                if (!in_array($key, $this->allowedColumns)) {
                    unset($data[$key]);
                }
            }
        }

        $query = "UPDATE $this->table SET ";

        $keys = array_keys($data);
        foreach ($keys as $key) {
            $query .= " $key = :$key,";
        }

        $query = trim($query, ",");

        $query .= " WHERE $id_column = :$id_column";

        $data[$id_column] = $id;
        return $this->query($query, $data);
    }
}
