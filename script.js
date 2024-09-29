function calculateAge() {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const result = document.getElementById("result");

    if (day && month && year) {
        const birthDate = new Date(year, month - 1, day);
        const currentDate = new Date();

        let age = currentDate.getFullYear() - birthDate.getFullYear();
        const m = currentDate.getMonth() - birthDate.getMonth();

        if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
            age--;
        }

        result.textContent = `You are ${age} years old.`;
    } else {
        result.textContent = "Please enter a valid date.";
    }
}
