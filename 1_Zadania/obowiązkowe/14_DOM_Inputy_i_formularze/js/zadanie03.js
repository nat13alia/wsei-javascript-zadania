document.addEventListener('DOMContentLoaded', function() {

    const team1 = document.querySelector('#team1');

    const team2 = document.querySelector('#team2');

    const points1 = document.querySelector('#points1');

    const points2 = document.querySelector('#points2');

    const table = document.querySelector('table');

    const submitBtn = document.querySelector('button');

    submitBtn.addEventListener('click', (e) =>  {
        e.preventDefault();

        if (checkTeams(team1.value, team2.value) && checkGoals(points1.value, points2.value)) {
            let team1Name = document.createElement('td');
            team1Name.innerText = team1.value;

            let team2Name = document.createElement('td');
            team2Name.innerText = team2.value;

            let p1_p2 = document.createElement('td');
            p1_p2.innerText = `${points1.value} - ${points2.value}`;

            let tr = document.createElement('tr');
            tr.appendChild(team1Name);
            tr.appendChild(team2Name);
            tr.appendChild(p1_p2);
            table.children[0].appendChild(tr);
        }
    });

    function checkTeams(t1, t2) {
        let teamCheck;
        t1 !== t2 ? teamCheck = true: teamCheck = false;
        return teamCheck;
    }

    function checkGoals(g1, g2) {
        if (g1 >= 0 && g2 >=0) {
            return true;
        } else {
            return false;
        }
    }

});