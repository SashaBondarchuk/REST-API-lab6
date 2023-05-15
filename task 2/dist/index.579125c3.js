const refs = {
    inputEl: document.querySelector("input[type=datetime]")
};
refs.inputEl.addEventListener("focus", onInputFocus);
refs.inputEl.addEventListener("blur", onInputBlur);
const onInputFocus = (event)=>{
    console.log("sdfsdf");
    event.target.placeholder = "2023-05-09";
};
const onInputBlur = (event)=>{
    event.target.placeholder = "";
};

//# sourceMappingURL=index.579125c3.js.map
