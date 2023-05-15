import moment from "moment";

const refs = {
    inputEl: document.querySelector("input[type=datetime]"),
    showButtonEL: document.querySelector("a"),
    resultEl: document.querySelector(".result"),
};

const onInputFocus = (event) => {
    event.target.placeholder = "2023-05-09";
};

const onInputBlur = (event) => {
    event.target.placeholder = "";
};

const isValidDateTime = (dateTime) =>
    moment(dateTime, "YYYY-MM-DD", true).isValid();

const onShowButtonClick = (event) => {
    if (!isValidDateTime(refs.inputEl.value)) {
        refs.inputEl.style.borderBottomColor = "red";
        return;
    }
    refs.inputEl.style.borderBottomColor = "white";
    fetch(`https://russianwarship.rip/api/v2/statistics/${refs.inputEl.value}`)
        .then((response) => response.json())
        .then((json) => {
            refs.resultEl.textContent = `Втрати ворога становлять ${json.data.stats.personnel_units} осіб`;
        });
};

refs.inputEl.addEventListener("focus", onInputFocus);
refs.inputEl.addEventListener("blur", onInputBlur);
refs.showButtonEL.addEventListener("click", onShowButtonClick);
