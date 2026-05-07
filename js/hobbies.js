// Ваш профиль (1 – нравится, 0 – нет)
const myHobbyProfile = [1, 0, 1, 0, 1, 1, 0, 0, 1];
const hobbyNames = [
    "Студия Гибли", "Марк Цукерберг", "Братья Стругацкие",
    "Лилии", "Мотоциклы", "Дом у моря",
    "Кошки", "Каризма", "Собаки"
];

$(document).ready(function() {
    $('.image-rc').click(function(e) {
        e.stopPropagation();
        $(this).toggleClass('selected');
        const newStatus = $(this).hasClass('selected') ? 1 : 0;
        $(this).attr('data-status', newStatus);
    });
});

window.calculateCompatibility = function() {
    let matches = 0;
    let matchedHobbies = [];

    $('.image-rc').each(function(index) {
        let val = parseInt($(this).attr('data-status')) || 0;
        if (val === myHobbyProfile[index]) {
            matches++;
            if (val === 1) matchedHobbies.push(hobbyNames[index]);
        }
    });

    let percent = Math.round((matches / 9) * 100);
    let message = getMessage(percent, matchedHobbies);
    showResult(message, percent);
};

function getMessage(percent, hobbies) {
    if (percent === 100) return "💖 Абсолютная совместимость! Мы точно подружимся!";
    if (percent >= 70) return `✨ У нас много общего! Нас объединяет: ${hobbies.join(', ')}.`;
    if (percent >= 40) return "🌱 Есть общие интересы, это уже начало!";
    return "🌈 Мы очень разные, но противоположности притягиваются!";
}

function showResult(message, percent) {
    let selected = [];
    $('.image-rc.selected').each(function() {
        let idx = $(this).index();
        if (hobbyNames[idx]) selected.push(hobbyNames[idx]);
    });

    let html = `
        <div class="result-card">
            <h3>Совместимость: ${percent}%</h3>
            <p>${message}</p>
            ${selected.length ? `<div class="user-selected">Вы выбрали: ${selected.join(', ')}</div>` : ''}
            <button onclick="resetCompatibilityTest()">🔄 Пройти заново</button>
        </div>
    `;
    $('#compatibility-result').html(html).fadeIn(500);
    $('html, body').animate({ scrollTop: $('#compatibility-result').offset().top - 100 }, 800);
}

window.resetCompatibilityTest = function() {
    $('.image-rc').removeClass('selected').attr('data-status', '0');
    $('#compatibility-result').fadeOut(300);
};