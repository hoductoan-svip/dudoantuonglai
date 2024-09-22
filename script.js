let step = 1;

function nextStep(currentStep) {
    if (currentStep === 1) {
        document.getElementById("step1").style.display = "none";
        document.getElementById("step2").style.display = "block";
        step++;
    } else if (currentStep === 2) {
        document.getElementById("step2").style.display = "none";
        document.getElementById("step3").style.display = "block";
        step++;
    }
}

function predict() {
    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;

    // Hiện thông báo loading
    document.getElementById("loading").style.display = "block";
    document.getElementById("step3").style.display = "none";

    setTimeout(() => {
        const maleNames = ["An", "Bình", "Cường", "Duy", "Hưng", "Khôi", "Nam", "Phong", "Quang", "Sơn", "Tài", "Việt", "Vinh"];
        const femaleNames = ["Hoa", "Lan", "Mai", "Ngọc", "Thảo", "Chi", "Diễm", "Hương", "Kiều", "Linh", "Nhi", "Thúy", "Yến"];

        const randomYear = Math.floor(Math.random() * (2010 - 2000 + 1)) + 2000; // Năm sinh từ 1980 đến 2000

        const randomName = (gender === "male") 
            ? femaleNames[Math.floor(Math.random() * femaleNames.length)] 
            : maleNames[Math.floor(Math.random() * maleNames.length)];

        const relationship = (gender === "male") ? "vợ" : "chồng";
        document.getElementById("result").innerText = `Tên ${relationship} của ${name} trong tương lai có thể là: ${randomName} (${randomYear})`;

        // Ẩn thông báo loading và hiện kết quả
        document.getElementById("loading").style.display = "none";
        document.getElementById("result").style.display = "block";
    }, 5000); // Thời gian chờ 5 giây
}
