// amount calculation on each row
const trAmount = () => {
    document.querySelectorAll(".orderTable .tdAmount").forEach(t => {
        const menu_amount = t.closest("tr").querySelector(".tdMenu .menu").getAttribute("data-menu-amount");
        const submenu_amount = t.closest("tr").querySelector(".tdSubMenu .submenu").getAttribute("data-submenu-amount");
        const quantity = t.closest("tr").querySelector(".tdQuantity .currentQuantity").innerHTML;
        let addon = 0;
        t.closest("tr").querySelectorAll(".tdAddOn .addon").forEach(a => (addon += Number(a.getAttribute("data-addon-amount"))));
        let totalAmountPerItem = (Number(menu_amount) + Number(submenu_amount) + Number(addon)) * Number(quantity);
        t.querySelector(".order_amount_display").innerHTML = totalAmountPerItem;
        t.querySelector(".order_amount").value = totalAmountPerItem;
    });
    let totalMerge = 0;
    document.querySelectorAll(".orderTable .tdAmount .order_amount_display").forEach(a => {
        totalMerge += Number(a.innerHTML);
    });
    document.querySelector(".sub_total_amount").value = totalMerge;

    // discount
    let discountCalc = 0;
    let discountCheck = document.querySelector(".submitDiscount").getAttribute("data-discount-mode");
    if (totalMerge == 0) {
        document.querySelector(".subTotalAmount").innerHTML = totalMerge;
    }
    if (discountCheck != "" && totalMerge != 0) {
        document.querySelector(".subTotalAmount").innerHTML = totalMerge;
        if (discountCheck == "percentageRadio") {
            discountCalc = (Number(document.querySelector(".by_percentage input").value) / 100) * totalMerge;
        } else if (discountCheck == "fixedAmountRadio") {
            discountCalc = Number(document.querySelector(".by_amount input").value)
        }
        totalMerge = totalMerge - discountCalc;

        // discount field value
        if (discountCalc - Math.floor(discountCalc) !== 0) {
            discountCalc = discountCalc.toFixed(2);
        }
        document.querySelector(".discount_amount").value = discountCalc;
        document.querySelector(".discountFieldValue").innerHTML = `- ${discountCalc}`;
        document.querySelector(".subAmountTable").setAttribute("data-discount", discountCalc);
        // document.querySelector(".discountText").setAttribute("data-discount", discountCalc);
    }

    // checking decimal points
    if (totalMerge - Math.floor(totalMerge) !== 0) {
        totalMerge = totalMerge.toFixed(2);
    }

    // set value to all places
    document.querySelector(".totalAmountAll").innerHTML = totalMerge;
    document.querySelector(".totalAmount").innerHTML = totalMerge;
    document.querySelector(".order_total_amount").value = totalMerge;

    // quantity calculation
    let all_quantity = 0;
    document.querySelectorAll(".currentQuantity").forEach(c => {
        all_quantity += Number(c.innerHTML);
    });
    document.querySelector(".total_quantity b").innerHTML = all_quantity;
};

// quantity plus
const plusClicked = p => {
    let q = Number(p.parentElement.querySelector(".currentQuantity").innerHTML) + 1;
    p.parentElement.querySelector(".currentQuantity").innerHTML = q;
    document.querySelector(".modal_quantity").innerHTML = q;
    p.parentElement.parentElement.querySelector(".order_quantity").value = q;
    p.parentElement.querySelector(".minusIcon").style.opacity = (p.parentElement.querySelector(".currentQuantity").innerHTML != 1) ? 1 : 0;
    trAmount(); // amount calculation
}

// quantity minus
const minusClicked = p => {
    if (p.parentElement.querySelector(".currentQuantity").innerHTML != 1) {
        p.parentElement.querySelector(".currentQuantity").innerHTML = Number(p.parentElement.querySelector(".currentQuantity").innerHTML) - 1;
        document.querySelector(".modal_quantity").innerHTML = p.parentElement.querySelector(".currentQuantity").innerHTML;
        p.parentElement.parentElement.querySelector(".order_quantity").value = p.parentElement.querySelector(".currentQuantity").innerHTML;
        p.parentElement.querySelector(".minusIcon").style.opacity = (p.parentElement.querySelector(".currentQuantity").innerHTML != 1) ? 1 : 0;
        trAmount(); // amount calculation
    }
}


// select category
const select_category = e => {
    e.parentElement.querySelector(".category").value = e.options[e.selectedIndex].getAttribute("data-category-name");
    const selectedCategoryId = e.options[e.selectedIndex].getAttribute("data-category-id");
    e.classList.remove("blankValueCheck");
    e.classList.remove("blankValue");

    // effect on menu
    e.closest("tr").querySelectorAll(".tdMenu .selectMenu option").forEach((m, i) => {
        m.parentElement.disabled = false;
        if (i > 0) {
            m.parentElement.value = "";
            m.classList.add("d-none");
            m.getAttribute("data-category-id") == selectedCategoryId && m.classList.remove("d-none");
        }
        m.parentElement.querySelector("option").selected = true;
    });
    e.closest("tr").querySelector(".tdMenu .menu").value = "";
    e.closest("tr").querySelector(".tdMenu .menu").setAttribute("data-menu-name", "");
    e.closest("tr").querySelector(".tdMenu .menu").setAttribute("data-menu-amount", 0);

    // effect on submenu
    e.closest("tr").querySelectorAll(".tdSubMenu .selectSubMenu option").forEach((m, i) => {
        m.parentElement.disabled = true;
        if (i > 0) {
            m.parentElement.value = "";
            m.classList.add("d-none");
            m.getAttribute("data-category-id") == selectedCategoryId && m.classList.remove("d-none");
        }
        m.parentElement.querySelector("option").selected = true;
    });
    e.closest("tr").querySelector(".tdSubMenu .submenu").value = "";
    e.closest("tr").querySelector(".tdSubMenu .submenu").setAttribute("data-submenu-name", "");
    e.closest("tr").querySelector(".tdSubMenu .submenu").setAttribute("data-submenu-amount", 0);

    // effect on addon
    e.closest("tr").querySelectorAll(".tdAddOn .selectAddOn").forEach(m => {
        m.checked = false;
        m.disabled = true;
        m.classList.remove("d-none");
        m.parentElement.classList.add("d-none");
        if (m.getAttribute("data-category-id") == selectedCategoryId) {
            m.parentElement.classList.remove("d-none");
            m.classList.remove("d-none");
            //m.disabled = false;
        }
    });
    e.closest("tr").querySelectorAll(".tdAddOn .addon").forEach(t => {
        t.value = "";
        t.setAttribute("data-addon-name", "");
        t.setAttribute("data-addon-id", "");
        t.setAttribute("data-addon-amount", 0);
    });
    e.closest("tr").querySelectorAll(".tdAddOn .addonMerge").forEach(t => {
        t.value = "";
        t.setAttribute("data-addons", "");
    });

    // effect on quantity
    e.closest("tr").querySelector(".tdQuantity .currentQuantity").innerHTML = 1;
    e.closest("tr").querySelector(".tdQuantity .minusIcon").style.opacity = 0;
    e.closest("tr").querySelector(".tdQuantity .order_quantity").value = 1;
    e.closest("tr").querySelector(".tdQuantity .quantityParent").classList.add("disabledBox");

    // effect on parcel
    e.closest("tr").querySelector(".tdParcel .selectParcel").value = document.querySelector(".selectParcel").value;
    e.closest("tr").querySelector(".tdParcel .order_parcel_status").value = document.querySelector(".selectParcel").value;
    e.closest("tr").querySelector(".tdParcel .selectParcel").disabled = true;


    // effect on comment
    e.closest("tr").querySelector(".tdComment .selectComment").value = "";
    e.closest("tr").querySelector(".tdComment .order_comment").value = "";
    e.closest("tr").querySelector(".tdComment .selectComment").disabled = true;
    e.closest("tr").querySelector(".tdComment .selectComment").classList.add("disabledBox");

    // effect on amount
    trAmount();

}

// select menu
const select_menu = e => {
    e.parentElement.querySelector(".menu").value = e.options[e.selectedIndex].getAttribute("data-menu-name");
    e.parentElement.querySelector(".menu").setAttribute("data-menu-name", e.options[e.selectedIndex].getAttribute("data-menu-name"));
    e.parentElement.querySelector(".menu").setAttribute("data-menu-amount", e.options[e.selectedIndex].getAttribute("data-menu-amount"));
    const selectedCategoryId = e.options[e.selectedIndex].getAttribute("data-category-id");
    e.classList.remove("blankValueCheck");
    e.classList.remove("blankValue");

    // effect on submenu
    e.closest("tr").querySelectorAll(".tdSubMenu .selectSubMenu option").forEach((m, i) => {
        m.parentElement.disabled = false;
        if (i > 0) { // ignore first field "Select SubMenu"
            m.parentElement.value = "";
            m.classList.add("d-none");
            if (m.getAttribute("data-category-id") == selectedCategoryId) {
                m.classList.remove("d-none");
            }
        }
        m.parentElement.querySelector("option").selected = true;
    });
    if (e.closest("tr").querySelectorAll(".selectSubMenu option[class=''][data-category-id]").length == 0) {
        e.closest("tr").querySelector(".selectSubMenu").disabled = true;
    } else {
        e.closest("tr").querySelector(".selectSubMenu").disabled = false;
    }
    e.closest("tr").querySelector(".tdSubMenu .submenu").value = "";
    e.closest("tr").querySelector(".tdSubMenu .submenu").setAttribute("data-submenu-name", "");
    e.closest("tr").querySelector(".tdSubMenu .submenu").setAttribute("data-submenu-amount", 0);
    e.closest("tr").querySelector(".tdSubMenu .selectSubMenu").classList.add("blankValueCheck");

    // effect on addon
    e.closest("tr").querySelectorAll(".tdAddOn .selectAddOn").forEach(m => {
        m.checked = false;
        m.disabled = true;
        m.classList.remove("d-none");
        m.parentElement.classList.add("d-none");
        if (m.getAttribute("data-category-id") == selectedCategoryId) {
            m.parentElement.classList.remove("d-none");
            m.classList.remove("d-none");
            m.disabled = false;
        }
    });
    e.closest("tr").querySelectorAll(".tdAddOn .addon").forEach(t => {
        t.value = "";
        t.setAttribute("data-addon-name", "");
        t.setAttribute("data-addon-id", "");
        t.setAttribute("data-addon-amount", 0);
    });
    e.closest("tr").querySelectorAll(".tdAddOn .addonMerge").forEach(t => {
        t.value = "";
        t.setAttribute("data-addons", "");
    });

    // effect on quantity
    e.closest("tr").querySelector(".tdQuantity .quantityParent").classList.remove("disabledBox");

    // effect on parcel
    e.closest("tr").querySelector(".tdParcel .selectParcel").disabled = false;

    // effect on comment
    e.closest("tr").querySelector(".tdComment .selectComment").disabled = false;
    e.closest("tr").querySelector(".tdComment .selectComment").classList.remove("disabledBox");

    // amount calculation
    trAmount();
}

// select submenu
const select_submenu = e => {
    e.parentElement.querySelector(".submenu").value = e.options[e.selectedIndex].getAttribute("data-submenu-name");
    e.parentElement.querySelector(".submenu").setAttribute("data-submenu-name", e.options[e.selectedIndex].getAttribute("data-submenu-name"));
    e.parentElement.querySelector(".submenu").setAttribute("data-submenu-amount", e.options[e.selectedIndex].getAttribute("data-submenu-amount"));
    const selectedCategoryId = e.options[e.selectedIndex].getAttribute("data-category-id");
    e.classList.remove("blankValueCheck");
    e.classList.remove("blankValue");

    // amount calculation
    trAmount();
}

// select addon
const select_addon = e => {
    e.parentElement.querySelector(".addon").value = "";
    e.parentElement.querySelector(".addon").setAttribute("data-addon-name", "");
    e.parentElement.querySelector(".addon").setAttribute("data-addon-id", "");
    e.parentElement.querySelector(".addon").setAttribute("data-addon-amount", 0);
    if (e.checked) {
        e.parentElement.querySelector(".addon").value = e.getAttribute("data-addon-name");
        e.parentElement.querySelector(".addon").setAttribute("data-addon-name", e.getAttribute("data-addon-name"));
        e.parentElement.querySelector(".addon").setAttribute("data-addon-id", e.getAttribute("data-addon-id"));
        e.parentElement.querySelector(".addon").setAttribute("data-addon-amount", e.getAttribute("data-addon-amount"));
    }
    let aMerge = "";
    e.parentElement.parentElement.querySelector(".addonMerge").value = "";
    e.parentElement.parentElement.querySelectorAll(".addon").forEach(a => (a.value != "") && (aMerge += `<${a.value}@${a.getAttribute('data-addon-amount')}>,`));
    e.parentElement.parentElement.querySelector(".addonMerge").value = `[${aMerge.substring(0, (aMerge.length - 1))}]`;
    let bMerge = "";
    e.parentElement.parentElement.querySelectorAll(".addon").forEach(b => (b.value != "") && (bMerge += `${b.value},`));
    e.parentElement.parentElement.querySelector(".addonMerge").setAttribute("data-addons", "");
    e.parentElement.parentElement.querySelector(".addonMerge").setAttribute("data-addons", bMerge.slice(0, -1));
    const selectedCategoryId = e.getAttribute("data-category-id");

    // amount calculation
    trAmount();
}

// select parcel
const select_parcel = e => {
    e.parentElement.querySelector(".order_parcel_status").value = e.options[e.selectedIndex].value;
}

// select comment
const select_comment = e => {
    e.parentElement.querySelector(".order_comment").value = e.value;
}
// auto select category
const auto_select_category = i => {
    document.querySelectorAll(".selectCategory")[document.querySelectorAll(".selectCategory").length - 1].selectedIndex = i;
    select_category(document.querySelectorAll(".selectCategory")[document.querySelectorAll(".selectCategory").length - 1]);
}

// auto select menu
const auto_select_menu = i => {
    document.querySelectorAll(".selectMenu")[document.querySelectorAll(".selectMenu").length - 1].selectedIndex = i;
    select_menu(document.querySelectorAll(".selectMenu")[document.querySelectorAll(".selectMenu").length - 1]);
}

// auto select submenu
const auto_select_submenu = i => {
    document.querySelectorAll(".selectSubMenu")[document.querySelectorAll(".selectSubMenu").length - 1].selectedIndex = i;
    select_submenu(document.querySelectorAll(".selectSubMenu")[document.querySelectorAll(".selectSubMenu").length - 1]);
}

// auto select addon
const auto_select_addon = i => {
    const addon_last_value = document.querySelectorAll(`.selectAddOn[data-addon-id='${i}']`)[document.querySelectorAll(`.selectAddOn[data-addon-id='${i}']`).length - 1].checked;
    document.querySelectorAll(`.selectAddOn[data-addon-id='${i}']`)[document.querySelectorAll(`.selectAddOn[data-addon-id='${i}']`).length - 1].checked = !addon_last_value;
    select_addon(document.querySelectorAll(`.selectAddOn[data-addon-id='${i}']`)[document.querySelectorAll(`.selectAddOn[data-addon-id='${i}']`).length - 1]);
}

// auto select comment
const auto_select_comment = value => {
    document.querySelectorAll(".selectComment")[document.querySelectorAll(".selectComment").length - 1].value = value;
    select_comment(document.querySelectorAll(".selectComment")[document.querySelectorAll(".selectComment").length - 1]);
}

// auto select parcel
const auto_select_parcel = i => {
    document.querySelectorAll(".selectParcel")[document.querySelectorAll(".selectParcel").length - 1].selectedIndex = i;
    select_parcel(document.querySelectorAll(".selectParcel")[document.querySelectorAll(".selectParcel").length - 1]);
}

// delete order
const delete_order = e => {
    e.closest("tr").remove();
    trAmount();
    if (document.querySelector(".orderTable tbody").childElementCount == 0) {
        //addMoreOrder();
    }
}

// load all scripts
const loadScript = () => {

    // disable enter key
    var el = window;
    el.addEventListener("keypress", event => {
        if (event.key === "Enter") {
            event.preventDefault();
        }
    });

    // menu and submenu - show amount if its added
    document.querySelectorAll(".selectMenu option").forEach(s => {
        if (s.getAttribute("data-menu-amount") > 0 && !s.innerHTML.includes(currency_symbol)) {
            s.innerHTML += `<gray>${s.getAttribute('data-currency')}</gray> ${s.getAttribute('data-menu-amount')}`;
        }
    });
    document.querySelectorAll(".selectSubMenu option").forEach(s => {
        if (s.getAttribute("data-submenu-amount") > 0 && !s.innerHTML.includes(currency_symbol)) {
            s.innerHTML += `<gray>${s.getAttribute('data-currency')}</gray> ${s.getAttribute('data-submenu-amount')}`;
        }
    });


    // addon id and for
    document.querySelectorAll(".tdAddOn").forEach((s, i) => {
        s.querySelectorAll(".selectAddOn").forEach(j => j.setAttribute("id", `${j.getAttribute("id")}_${i}`));
        s.querySelectorAll(".form-check-label").forEach(k => k.setAttribute("for", `${k.getAttribute("for")}_${i}`));
    });


    // select category
    document.querySelectorAll(".selectCategory").forEach(c => {
        c.addEventListener("change", () => select_category(c));
    });

    // select menu
    document.querySelectorAll(".selectMenu").forEach(c => {
        c.addEventListener("change", () => select_menu(c));
    });

    // select submenu
    document.querySelectorAll(".selectSubMenu").forEach(c => {
        c.addEventListener("change", e => select_submenu(c));
    });

    // select addon
    document.querySelectorAll(".selectAddOn").forEach(c => {
        c.addEventListener("change", e => select_addon(c));
    });

    // select parcel
    document.querySelectorAll(".selectParcel").forEach(c => {
        c.addEventListener("change", e => select_parcel(c));
    });

    // add comment
    document.querySelectorAll(".selectComment").forEach(c => {
        c.addEventListener("input", () => select_comment(c));
    });

    // delete order        
    document.querySelectorAll(".deleteIcon").forEach(d => {
        d.addEventListener("click", () => delete_order(d));
    });

};
loadScript();

// copy order
document.querySelector(".orderCopy").innerHTML = `<!--${document.querySelector(".orderTable tbody tr").outerHTML}-->`;

// clear modal data
const clear_modal_data = () => {
    document.querySelectorAll(".modal_category_selected").forEach(m => m.classList.remove("modal_category_selected"));
    document.querySelectorAll(".modal_menu_selected").forEach(m => m.classList.remove("modal_menu_selected"));
    document.querySelectorAll(".modal_submenu_selected").forEach(m => m.classList.remove("modal_submenu_selected"));
    document.querySelectorAll(".modal_addon_selected").forEach(m => m.classList.remove("modal_addon_selected"));
    document.querySelectorAll(".modal_parcel_selected").forEach(m => {
        m.classList.remove("modal_parcel_selected")
    });
    const first_parcel = document.querySelector(".selectParcel").value; // select parcel value from first selection
    if (first_parcel == "Yes") {
        document.querySelectorAll(".modal_parcel")[0].classList.add("modal_parcel_selected");
    } else {
        document.querySelectorAll(".modal_parcel")[1].classList.add("modal_parcel_selected");
    }
    document.querySelectorAll(".modal_comment_select").forEach(m => m.value = "");
    document.querySelectorAll(".modal_quantity").forEach(m => m.innerHTML = "1");
    // auto select first category
    document.querySelector(".modal_category").click();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// add more order
const addMoreOrder = () => {
    let orderCopy = document.querySelector(".orderCopy").innerHTML.replace("<!--", "").replace("-->", "");
    document.querySelector(".orderTable tbody").insertAdjacentHTML("beforeend", orderCopy);
    loadScript();
    clear_modal_data();
    auto_select_category(1);
};
document.querySelector(".addMore").addEventListener("click", addMoreOrder);

// payment method
document.querySelectorAll(".order_payment_checkbox").forEach(c => {
    c.addEventListener("change", () => {
        document.querySelector(".submit").classList.remove("disabledBox");
        document.querySelector(".order_payment_method").value = c.getAttribute("data-method");
    });
});

// insert orders in print table
setInterval(() => {
    // customer
    let customerMerge = "";
    document.querySelectorAll(".orderTable tbody tr").forEach(t => {
        customerMerge += `<tr data-amount="${t.querySelector(".order_amount_display").innerHTML}">
                    <td class="text-center" style="width:50px;">${t.querySelector(".order_quantity").value}</td>
                    <td>
                        ${t.querySelector(".order_parcel_status").value == "Yes" ? "P - " : ""}
                        ${t.querySelector(".menu").value}
                        ${t.querySelector(".submenu").value == "" ? "" : " - " + t.querySelector(".submenu").value}
                        ${t.querySelector(".addonMerge").value == "" ? "" : t.querySelector(".addonMerge").value
                .replace(/</g, "")
                .replace(/>/g, ")")
                .replace(/\[/g, " - ")
                .replace(/\]/g, "")
                .replace(/,/g, " - ")
                .replace(/@/g, " (" + currency_symbol)}
                        ${t.querySelector(".order_comment").value.trim() == "" ? "" : "<br>[" + t.querySelector(".order_comment").value + "]"}
                    </td>
                    <td class="text-end">${t.querySelector(".order_amount_display").innerHTML}</td>
                </tr>`;
    });
    document.querySelector(".orderDiv tbody").innerHTML = customerMerge;

    // kitchen
    let kitchenMerge = "";
    document.querySelectorAll(".orderTable tbody tr").forEach(t => {
        kitchenMerge += `<tr data-amount="${t.querySelector(".order_amount_display").innerHTML}">
                    <td class="text-center" style="width:80px;">${t.querySelector(".order_quantity").value}</td>
                    <td>
                        ${t.querySelector(".order_parcel_status").value == "Yes" ? "P - " : ""}
                        ${t.querySelector(".menu").value}
                        ${t.querySelector(".submenu").value == "" ? "" : " - " + t.querySelector(".submenu").value}
                        ${t.querySelector(".addonMerge").getAttribute("data-addons") == "" || t.querySelector(".addonMerge").getAttribute("data-addons") == undefined ? "" : " - " + t.querySelector(".addonMerge").getAttribute("data-addons")
                .replace(/,/g, " - ")}                            
                        ${t.querySelector(".order_comment").value.trim() == "" ? "" : "<br>(" + t.querySelector(".order_comment").value + ")"}
                    </td> 
                    <td class="text-end">${t.querySelector(".order_amount_display").innerHTML}</td>                   
                </tr>`;
    });
    document.querySelector(".orderDivKitchen tbody").innerHTML = kitchenMerge;

}, 200);
if (document.querySelector(".orderDivKitchen .OrderTime")) { // showing only time 
    let kot_date = document.querySelector(".orderDivKitchen .OrderTime").innerHTML.split(" ");
    document.querySelector(".orderDivKitchen .OrderTime").innerHTML = kot_date[3] + " " + kot_date[4];
}

// check items
document.querySelector(".check_items").addEventListener("click", () => {
    document.querySelector(".order_modal").innerHTML = document.querySelector(".orderDiv .table").outerHTML;
});

// print customer
document.querySelector(".printCustomer").addEventListener("click", () => {
    document.body.classList.remove("printKitchenActive");
    document.body.classList.add("printCustomerActive");
    window.print();
});

// print kitchen
document.querySelector(".printKitchen").addEventListener("click", () => {
    document.body.classList.add("printKitchenActive");
    document.body.classList.remove("printCustomerActive");
    window.print();
});

// print keyboard shorts
window.addEventListener("keydown", e => {
    if (document.querySelector("#exampleModal[style*='block']")) {
        (e.key == "c") && document.querySelector(".printCustomer").click();
        (e.key == "v") && document.querySelector(".printKitchen").click();
    }
});

// discounts
document.querySelectorAll("input[name='discountRadio']").forEach(r => {
    r.addEventListener("change", e => {
        document.querySelector(".submitDiscount").setAttribute("data-discount-mode", e.target.id);
        if (e.target.id == "percentageRadio") {
            document.querySelector(".by_percentage").classList.remove("d-none");
            document.querySelector(".by_amount").classList.add("d-none");
        } else {
            document.querySelector(".by_percentage").classList.add("d-none");
            document.querySelector(".by_amount").classList.remove("d-none");
        }
    });
});

// restricting percentge value under 100
let amount = document.querySelector('.by_percentage input');
amount.addEventListener('input', function (e) {
    document.querySelectorAll(".by_percentage p span").forEach(c => c.classList.remove("percentage-selected"));
    if (amount.value <= 100) {
        amount.value = amount.value;
    } else if (amount.value > 100) {
        amount.value = amount.value.slice(0, 2);
    }
});

// selecting percentage amount from pre-defined value
document.querySelectorAll(".by_percentage p span").forEach(p => {
    p.addEventListener("click", e => {
        document.querySelectorAll(".by_percentage p span").forEach(c => c.classList.remove("percentage-selected"));
        p.classList.add("percentage-selected");
        document.querySelector('.by_percentage input').value = Number(p.innerHTML);
    });
});

// submitting discount page
document.querySelector(".submitDiscount").addEventListener("click", () => {
    let discountValue = 0;
    let check = 0;
    if (!document.querySelector(".by_percentage").classList.contains("d-none")) {
        discountValue = document.querySelector(".by_percentage input").value;
        if (discountValue != "") {
            check = 1;
            discountValue = `${document.querySelector(".by_percentage input").value}%`;
        }
    }
    if (!document.querySelector(".by_amount").classList.contains("d-none")) {
        discountValue = document.querySelector(".by_amount input").value;
        if (discountValue != "") {
            check = 1;
            discountValue = `${currency_symbol} ${document.querySelector(".by_amount input").value}`;
        }
    }
    if (check == 1) {
        document.querySelector(".discountPercentageShow").innerHTML = discountValue;
        document.querySelector(".discountPercentageShow").setAttribute("data-discount-full", discountValue);
        //document.querySelector(".discountText").setAttribute("data-discount", discountValue);
        setTimeout(() => alert(`<p class="text-center my-3">${success_alert_icon}</p><b>${discountValue}</b> discount is applied.`), 300);
        // document.querySelector(".subTotalText").setAttribute("data-sub", discountValue);
        trAmount();
    }
});

// online order
document.querySelectorAll(".online_order").forEach(o => {
    o.addEventListener("click", () => {
        document.querySelectorAll(".online_order").forEach(p => p.classList.remove("online_selected"));
        o.classList.add("online_selected");
        document.querySelector("input[name='customer_name']").value = `Online | ${o.innerHTML}`;
        // changes on kitchen bill
        $online_text = `<b class="fst-italic rounded px-1 d-inline-block" style="border:1px solid black;">${o.innerHTML}</b>`;
        document.querySelector(".orderDivKitchen .orderNumText").innerHTML = $online_text;
        document.querySelector(".orderDivCustomer .orderNumText").innerHTML = $online_text;

    });
});

// payment select
document.querySelectorAll(".payment_select").forEach(p => {
    p.addEventListener("click", () => {
        document.querySelectorAll(".payment_select label").forEach(s => s.classList.remove("payment_selected"));
        p.querySelector('label').classList.add("payment_selected");
    });
});

// parcel toggle
document.querySelector(".parcel_toggle").addEventListener("click", () => {
    document.querySelectorAll(".selectParcel").forEach(s => {
        s.value = (s.value == "Yes") ? "No" : "Yes";
        s.parentElement.querySelector(".order_parcel_status").value = s.options[s.selectedIndex].value;
    });
});

// response from server
const date_timestamp = (d) => {
    // console.log(d);
}

// *************************** order modal ***************************

// select modal category
document.querySelectorAll(".modal_category").forEach(m => {

    m.addEventListener("click", () => {

        // add/remove selected class from category
        document.querySelectorAll(".modal_category").forEach(p => p.classList.remove("modal_category_selected"));
        m.classList.add("modal_category_selected");

        // get category id
        const category_id = m.getAttribute("data-category-id");

        // effect on category            
        document.querySelectorAll(".selectCategory")[document.querySelectorAll(".selectCategory").length - 1].querySelectorAll("option").forEach((s, i) => {
            if (s.getAttribute("data-category-id") == category_id) {
                auto_select_category(i);
            }
        });

        // effect on modal menu
        document.querySelectorAll(".modal_menu").forEach(r => r.classList.add("d-none"));
        document.querySelectorAll(".modal_menu").forEach(n => {
            if (n.getAttribute('data-category-id') == category_id) {
                n.classList.remove("d-none");
            }
        });
        document.querySelectorAll(".modal_menu").forEach(p => p.classList.remove("modal_menu_selected"));

        // effect on modal submenu
        // showing sub-menu as per category_id
        document.querySelectorAll(".modal_submenu").forEach(r => r.classList.add("d-none"));
        document.querySelectorAll(".modal_submenu").forEach(n => {
            if (n.getAttribute('data-category-id') == category_id) {
                n.classList.remove("d-none");
            }
        });
        // hiding whole section if not having any submenu
        document.querySelector(".modal_submenu_wrap").classList.add("d-none");
        if (document.querySelectorAll(".modal_submenu:not(.d-none)").length > 0) {
            document.querySelector(".modal_submenu_wrap").classList.remove("d-none");
        }

        // effect on modal addon
        document.querySelectorAll(".modal_addon").forEach(r => r.classList.add("d-none"));
        document.querySelectorAll(".modal_addon").forEach(n => {
            if (n.getAttribute('data-category-id') == category_id) {
                n.classList.remove("d-none");
            }
        });
        // hiding whole section if not having any addon
        document.querySelector(".modal_addon_wrap").classList.add("d-none");
        if (document.querySelectorAll(".modal_addon:not(.d-none)").length > 0) {
            document.querySelector(".modal_addon_wrap").classList.remove("d-none");
        }
    });
});
// auto select first category
document.querySelector(".modal_category").click();

// select modal menu
document.querySelectorAll(".modal_menu").forEach(m => {

    m.addEventListener("click", () => {

        // add/remove selected class from menu
        document.querySelectorAll(".modal_menu").forEach(p => p.classList.remove("modal_menu_selected"));
        m.classList.add("modal_menu_selected");

        // get menu id
        const menu_id = m.getAttribute("data-menu-id");

        // effect on menu            
        document.querySelectorAll(".selectMenu")[document.querySelectorAll(".selectMenu").length - 1].querySelectorAll("option").forEach((s, i) => {
            if (s.getAttribute("data-menu-id") == menu_id) {
                auto_select_menu(i);
            }
        });

        // effect on modal submenu
        document.querySelectorAll(".modal_submenu").forEach(p => p.classList.remove("modal_submenu_selected"));

        // effect on modal addon
        document.querySelectorAll(".modal_addon").forEach(p => p.classList.remove("modal_addon_selected"));


    });
});

// select modal submenu
document.querySelectorAll(".modal_submenu").forEach(m => {

    m.addEventListener("click", () => {

        // add/remove selected class from submenu
        document.querySelectorAll(".modal_submenu").forEach(p => p.classList.remove("modal_submenu_selected"));
        m.classList.add("modal_submenu_selected");

        // get submenu id
        const submenu_id = m.getAttribute("data-submenu-id");

        // effect on submenu            
        document.querySelectorAll(".selectSubMenu")[document.querySelectorAll(".selectSubMenu").length - 1].querySelectorAll("option").forEach((s, i) => {
            if (s.getAttribute("data-submenu-id") == submenu_id) {
                auto_select_submenu(i);
            }
        });
    });
});

// select modal addon
document.querySelectorAll(".modal_addon").forEach(m => {

    m.addEventListener("click", () => {

        // add/remove selected class from addon
        // document.querySelectorAll(".modal_addon").forEach(p => p.classList.remove("modal_addon_selected"));
        m.classList.toggle("modal_addon_selected");

        // get addon id
        const addon_id = m.getAttribute("data-addon-id");

        // effect on addon       
        auto_select_addon(addon_id);

    });
});

// select modal parcel
document.querySelectorAll(".modal_parcel").forEach(m => {

    m.addEventListener("click", () => {

        // add/remove selected class from parcel
        document.querySelectorAll(".modal_parcel").forEach(p => p.classList.remove("modal_parcel_selected"));
        m.classList.add("modal_parcel_selected");

        // get parcel id
        const parcel_id = m.getAttribute("data-parcel-id");

        // effect on parcel            
        document.querySelectorAll(".selectParcel")[document.querySelectorAll(".selectParcel").length - 1].querySelectorAll("option").forEach((s, i) => {
            if (s.getAttribute("data-parcel-id") == parcel_id) {
                auto_select_parcel(i);
            }
        });
    });
});

// select modal comment
document.querySelectorAll(".modal_comment_select").forEach(m => {

    m.addEventListener("input", () => {

        // effect on comment            
        //document.querySelectorAll(".selectComment")[document.querySelectorAll(".selectComment").length - 1].value = m.value;
        auto_select_comment(m.value);
    });
});

// remove order initially
document.querySelector(".order_row").remove();
document.querySelector(".addMore").click();

// auto-select 1st category
auto_select_category(1);


// form submit
const form = document.querySelector("#orderForm");
const postData = async (formattedFormData) => {
    const response = await fetch('submit.php', {
        method: 'POST',
        body: formattedFormData
    });
    const data = await response.text();
    document.querySelector(".responseData").innerHTML = data;
    document.querySelector(".print").classList.remove("disabledBox");
    // increase pending order after success
    if (data.includes("submit-success") && document.querySelector(".pendingOrder.updatePending")) {

        let pendingAdd = Number(document.querySelector(".pendingOrder.updatePending b").innerHTML) + 1;
        document.querySelector(".pendingOrder.updatePending b").innerHTML = pendingAdd;
        document.querySelector(".pendingOrder.updatePending b").classList.add("blink");
        document.querySelector(".pendingOrder.updatePending").setAttribute("data-pending", pendingAdd);
        document.querySelector(".pendingOrder.updatePending").classList.remove("updatePending");

    }
    if (data.includes("update-success") || data.includes("submit-success")) {

        // update date
        let order_date = document.querySelector(".response_data").innerHTML;
        let order_timestamp = document.querySelector(".response_data").getAttribute('data-timestamp');
        let order_invoice = document.querySelector(".response_data").getAttribute('data-invoice');

        document.querySelector(".orderDivKitchen .OrderTime").innerHTML = order_date.split(" ")[3] + " " + order_date.split(" ")[4];
        document.querySelector(".orderDivCustomer .OrderTime").innerHTML = order_date;
        document.querySelector(".order_date_value").value = order_date;
        document.querySelector(".order_timestamp_value").value = order_timestamp;
        document.querySelector(".orderDivCustomer .orderInvoice inv").innerHTML = order_invoice;
        document.querySelector(".orderDivCustomer .orderInvoice inv").innerHTML = order_invoice;

        if (payment_voice == "Yes") {
            startVoice(`Your total Amount is ${document.querySelector(".totalAmountAll").innerHTML}.`);
            startVoice(`Your total Amount is ${document.querySelector(".totalAmountAll").innerHTML}.`);
        }

        // auto-click on print button
        //document.querySelector(".print").click();
        // direct print button instead of manual keyboard clicks
        document.querySelector(".printCustomer").click();
        document.querySelector(".printKitchen").click();

    }
};
document.querySelector(".submit").addEventListener("click", e => {
    e.preventDefault(); // disable form submit
    if (document.querySelectorAll(".blankValueCheck:not([disabled])").length > 0) { // check for blank fields
        document.querySelector(".blankValueCheck").classList.add("blankValue");
        alert(`<p>${warningIcon}</p><b class='text-danger'>Please fill out all required fields</b>`);
    } else {
        document.querySelector(".responseData").innerHTML = ""; // clear server response
        const formattedFormData = new FormData(form); // get form data
        postData(formattedFormData); // post data to server
    }
});