const wrapper = document.querySelector(".wrapper"),
    qrinput = wrapper.querySelector(".form input"),
    generatebtn = wrapper.querySelector(".form button"),
    qrimg = wrapper.querySelector(".qr-code img");


generatebtn.addEventListener("click", () => {
    // Input tag ka andar hum jo bhi Likhenge wo qrvalue wala Variable ka andar a jayge
    let qrvalue = qrinput.value;

    if (!qrvalue) {
        return;
    }

    // jub hum Generate ka Button Per Click karenga tu Ois Button ka InnerText mein yeah Likha a jayga
    generatebtn.innerText = "Generating QR Code...";

    // yeah QR code ki Api hai 
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrvalue}`;

    // yeah QR Code ki Image ko Load karega or active name ki class add ho jayge iski Styling humne Css mein kari hai
    qrimg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generatebtn.innerText = "Generating QR Code...";
    });
});

// or jub hum Input ka andar se text remove karenga tu QR code bhi Hide ho jayga
qrinput.addEventListener('keyup', () => {
    if (!qrinput.value) {
        wrapper.classList.remove('active');
    }
});
