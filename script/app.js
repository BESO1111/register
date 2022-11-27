//ვალიდაციაე გავიჭედე. ანუ დაწერით დავწერე უბრალოთ სწორზეც და არასწორზეც ერთი და იგივე შეტყობინება გამოაქვს როცა საბმიტ დავაწვები. ორი პაროლის შედარებას ვაკეტებ ვიცი როგორ უნდა გავაკეთო მაგრამ ეს ვერ გავაკეთე.if-სიც გავუწერე და ცალკე ELSE-მარა მაინც არ გამომივიდა სხვადასხვა შეტყობინებების გამოტანა..

// ჯავასკრიპტიდან დამატება წაშლა დავამუღამე. ის ვერ გავაკეტე მარტო select option 




let registracia = document.getElementById("regi");


const valuee = {
    username: {
        label: 'მომხმარებელი',
        type: 'text',
        validators: {
            required: {
                errorText: 'ეს ველი აუცილებელია'
            },
            minLenght: {
                value: 6,
                errorText: 'მინიმალური სიმბოლების რაოდენაბა არის 6'
            },
            maxLength: {
                value: 20,
                errorText: '20 სიმბოლოზე მეტია!!!'
            }

        }
    },

    password: {
        label: 'პაროლი',
        type: 'password',
        validators: {
            required: {
                errorText: 'ეს ველი აუცილებელია'
            },
            minLenght: {
                value: 8,
                errorText: 'მინიმალური სიმბოლების რაოდენაბა არის 6'
            },
            dontMach: {
                name: 'username'
            }
        }
    }
}











registracia.addEventListener('click', () => {

    let elementadd = document.createElement('div');
    elementadd.classList.add('elementadd');
    document.body.append(elementadd);
    // --------------------------


    let header = document.createElement('div');
    header.classList.add('header');

    elementadd.append(header);

    // --------------------------

    let reggistracia = document.createElement('div');
    reggistracia.classList.add('reggistracia');
    reggistracia.innerHTML = "რეგისტრაცია";
    header.append(reggistracia);

    // --------------------------


    let clozee = document.createElement('div');
    clozee.classList.add('clozee');
    clozee.innerHTML = "x";
    header.append(clozee);

    // --------------------------


    clozee.addEventListener('click', (e) => {

        elementadd.remove()
    })
    // --------------------------
    let mtavaridivi = document.createElement('div');

    mtavaridivi.classList.add('mtavaridivi');
    elementadd.append(mtavaridivi);



    let input1 = document.createElement('input');
    input1.classList.add('input1');
    mtavaridivi.append(input1);
    input1.type = Text;
    input1.placeholder = 'მომხმარებელი';
    input1.maxLength = 20;



    let paswordname = document.createElement('input');
    paswordname.classList.add('paswordname');
    mtavaridivi.append(paswordname);
    paswordname.type = "password"
    paswordname.placeholder = 'პაროლი';
    paswordname.maxLength = 25;
    paswordname.minLength = 8;

    let emaill = document.createElement('input');
    emaill.classList.add('email');
    mtavaridivi.append(emaill);
    emaill.type = "email";
    emaill.placeholder = 'თქვენი მაილი';
    emaill.maxLength = 18;
    emaill.minLength = 6;


    let selectt = document.createElement('select');
    selectt.classList.add('selectt');
    mtavaridivi.append(selectt);


    let optionn = document.createElement('option')
    optionn.classList.add("optionn");
    selectt.append(optionn);


    let numbers = document.createElement("input");
    numbers.classList.add('numbers')
    mtavaridivi.append(numbers);
    numbers.placeholder = "პირადი ნომერი";
    numbers.type = 'number';



    let wosborn = document.createElement('input');
    wosborn.classList.add('wosborn');
    mtavaridivi.append(wosborn);
    wosborn.placeholder = "დაბადების თარიღი";
    wosborn.value = 2022;




    let teqst = document.createElement('teqst');
    teqst.classList.add('teqst');
    teqst.innerHTML = 'ადასტურებთ რომ ხარ სდგფ დფგკდფგ დლგკნდ ლკდნგლდფ დკნმგლდმ ,კდნგლდკფნგ ,დნფგლკდფნმგლდკმგდფლკლდფ დლფკგნდფ '
    mtavaridivi.append(teqst);


    //-------------
    let submit = document.createElement('div');
    submit.classList.add('submit');
    submit.innerHTML = "დადასტურება";
    mtavaridivi.append(submit);






    submit.addEventListener('click', () => {


        let momxmarebeli = document.getElementsByClassName('input1').value;

        let paroli = document.getElementsByClassName("paswordname").value;
        let emaili = document.getElementsByClassName("emaill").value;

        if (momxmarebeli == "" || momxmarebeli == null) {

            alert('gtxovt chawerot momxmarebeli')


        }

        else {
            alert('sworia')
        }



        if (paroli == "" || paroli == null || paroli.maxLength > 25 || paroli < 8) {


            alert('gtxovt chawerot swori paroli')
        }



        if (emaili != "@") {

alert("htxovt dawerot maili")
return true
    }

})


})




