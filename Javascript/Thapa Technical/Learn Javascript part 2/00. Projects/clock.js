function time () {
        let sec = 0;
        let min = 0;
        let hours = 0;

        function clock(){
        sec++
        if(sec == 60){sec = 0; min++};
        if(min == 60){min = 0; hours++};
        console.log(`${hours}:${min}:${sec}`);
        }

        setInterval(clock, 1000);
}

time();