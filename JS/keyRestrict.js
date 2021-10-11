function keyRestrict(e, val, validType) {

    var key = '',
        keychar = '';
    key = getKeyCode(e);
    if (key == null) return true;
    keychar = String.fromCharCode(key);
    keychar = keychar.toLowerCase();

    var validchars;
    if (validType == "Number") {
        validchars = "0123456789";
    } else if (validType == "NumberNegative") {
        validchars = "-0123456789";
    } else if (validType == "Decimal") {
        validchars = "0123456789.";
    } else if (validType == "DecimalNegative") {
        validchars = "-0123456789.";
    } else if (validType == "cssNumber") {
        validchars = "0123456789%";
    } else if (validType == "Filename") {
        validchars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-";
    } else if (validType == "ProductDiscount") {
        validchars = "0123456789.%";
    } else if (validType == "ServicePackageDiscount") {
        validchars = "0123456789.%F";
    } else if (validType == "Menu") {
        validchars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_~!@$%^*()+={}[]|:'. -";
    }
    validchars = validchars.toLowerCase();

    if (validType == "NumberNegative") {
        if (keychar == "-") {
            if (val.indexOf(keychar) != -1)
                return false;
        }
        if (validchars.indexOf(keychar) != -1)
            return true;
    } else if (validType == "Decimal") {
        if (keychar == ".") {
            if (val.indexOf(keychar) != -1)
                return false;
        }
        if (validchars.indexOf(keychar) != -1)
            return true;
    } else if (validType == "DecimalNegative") {
        if (keychar == ".") {
            if (val.indexOf(keychar) != -1)
                return false;
        }
        if (keychar == "-") {
            if (val.indexOf(keychar) != -1)
                return false;
        }
        if (validchars.indexOf(keychar) != -1)
            return true;
    } else if (validType == "cssNumber") {
        if (keychar == "%") {
            if (val.indexOf(keychar) != -1)
                return false;
        }
        if (validchars.indexOf(keychar) != -1)
            return true;
    } else {
        if (validchars.indexOf(keychar) != -1)
            return true;
    }

    if (key == null || key == 0 || key == 8 || key == 9 || key == 13 || key == 27)
        return true;
    return false;
}
