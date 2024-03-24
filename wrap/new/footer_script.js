// sort table
function table_sort() {
    const styleSheet = document.createElement('style')
    styleSheet.innerHTML = `
          .order-inactive span {
            opacity:0.4;
          }
          .order-inactive:hover span {
            opacity:1;
          }
      `
    document.head.appendChild(styleSheet)

    document.querySelectorAll('thead th').forEach(th_elem => {
        let asc = true
        const span_elem = document.createElement('span')
        span_elem.style = "font-size:0.8rem; margin-left:0.5rem"
        span_elem.innerHTML = "▼"
        th_elem.appendChild(span_elem)
        th_elem.classList.add('order-inactive')

        const index = Array.from(th_elem.parentNode.children).indexOf(th_elem)
        th_elem.addEventListener('click', (e) => {
            document.querySelectorAll('thead th').forEach(elem => {
                elem.classList.remove('order-active')
                elem.classList.add('order-inactive')
            })
            th_elem.classList.remove('order-inactive')
            th_elem.classList.add('order-active')

            if (!asc) {
                th_elem.querySelector('span').innerHTML = '▲'
            } else {
                th_elem.querySelector('span').innerHTML = '▼'
            }
            const arr = Array.from(th_elem.closest("table").querySelectorAll('tbody tr'))
            arr.sort((a, b) => {
                const a_val = a.children[index].innerText
                const b_val = b.children[index].innerText
                return (asc) ? a_val.localeCompare(b_val) : b_val.localeCompare(a_val)
            })
            arr.forEach(elem => {
                th_elem.closest("table").querySelector("tbody").appendChild(elem)
            })
            asc = !asc
        })
    })
}

table_sort();

function printDiv(div) {
    var divContents = div.innerHTML;
    var a = window.open('', 'printTab', 'height=auto, width=270');

    a.document.write('<html>');
    a.document.write('<body>');
    if (document.querySelector('input[name="date1"]') && document.querySelector('input[name="date2"]')) {
        let date1 = document.querySelector('input[name="date1"]').value;
        date1 = new Date(date1).getDate() + '/' + (new Date(date1).getMonth() + 1) + '/' + new Date(date1).getFullYear();
        let date2 = document.querySelector('input[name="date2"]').value;
        date2 = new Date(date2).getDate() + '/' + (new Date(date2).getMonth() + 1) + '/' + new Date(date2).getFullYear();
        if (date1 == date2) {
            a.document.write('<p class="date-range">Date: ' + date1 + ' </p>');
        } else {
            a.document.write('<p class="date-range">From: <i>' + date1 + '</i> | To: <i>' + date2 + '</i></p>');
        }
    }
    a.document.write(divContents);
    a.document.write(`<style>
    body {        
        padding:0;
        margin:0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    * {
        font-family: Trebuchet MS;
        font-size: 11pt !important;
    }
    .no-print {
        display: none;
    }
    .bb {
        border-bottom:1px solid;
    }
    tr.separator + tr td {
        padding-bottom:5px !important;
    }
    table {
        width: min-content;
    }
    .fw-bold {
        font-weight:bold;
    }
    th {
        font-weight: bold;
      
        & span {
            display: none;
        }
        text-align: left;
    }
    th, td {
        padding: 2px 5px !important;
    }
    .text-end {
            text-align:right;
    }
    thead th {
        border-bottom: 1px solid;
    }
    .border-bottom {
        border-bottom: 1px solid;
    }
    tfoot th {
        border-top: 1px solid !important;
        font-weight:bold;
    }
    .date-range {
        margin-bottom:0;
    }
    .fs-7 {
        font-size: 9pt !important;
    }
    </style>`);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
    a.close();
} 