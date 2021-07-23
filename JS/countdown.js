let countDown = () => {
    //Declaring our variables and setting them into motion
    const date = new Date('June 26, 2022 00:00:00').getTime();
    const currentTime = new Date().getTime();
    const subtractTime = date - currentTime;

    // How does these works? Lets go!
    const seconds = 1000;
    const minutes = seconds * 60;
    const hour = minutes * 60;
    const day = hour * 24;

    //Let's calculate them 

    const mainDay = Math.floor(subtractTime / day);
    const mainHour = Math.floor((subtractTime % day) / hour);
    const mainMinutes = Math.floor((subtractTime % hour) / minutes);
    const mainSeconds = Math.floor((subtractTime % minutes) / seconds);

    //functionalities and the mechanics that makes our timer work
    document.querySelector('.day').innerText = mainDay;
    document.querySelector('.hour').innerText = mainHour;
    document.querySelector('.minutes').innerText = mainMinutes;
    document.querySelector('.seconds').innerText = mainSeconds;
}
setInterval(countDown, 1000)