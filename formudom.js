const d = document;

export default function contactFormValidations(){}

function contactFormValidations(){
    const $form = d.querySelector(".contact-form"),
    $input = d.querySelectorAll(".contact-form [requeired]")

    console.log ($inputs);

    $input.forEach(input) => {
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        &$span.classList.add("contact-form-error")
        input.insertAdjacentElement("afterend",$span);
    });

    d.addEventListener("keyup",(e) => {
        if (e.target.matches("contact-form[requiered]")){
            let $input = e.target,
            pattern = $input.pattern || $input.dataset.pattern;

            if regex = new RegExp(pattern);
            return !regex.exec($input.value)
            ? d.getElementById($input.name)class.ist.add("is-active")
            :d.getElementById($input.name)class.ist.remove("is-active");
        }
    }