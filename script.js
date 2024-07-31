let audio = document.querySelector('#audio');
let nameSong = document.querySelector('.nameSong');
let nameSinger = document.querySelector('.nameSinger');
let nameCategory = document.querySelector('.nameCategory');
let songTime = document.querySelector('.song-time');
let songRange = document.querySelector('.song-range');
let songDuration = document.querySelector('.song-duration');
let imgSinger = document.querySelector('.img-singer');
let undoSecond = document.querySelector('.undoSecond');
let prev = document.querySelector('.prev');
let playPause = document.querySelector('.play-pause');
let next = document.querySelector('.next');
let undoFirst = document.querySelector('.undoFirst');
let buttonsSpeed = document.querySelectorAll('.buttonsSpeed');
let audioVolume = document.querySelector('.audio-volume');
let percent = document.querySelector('.percent');
let startRepeat = document.querySelector('.startRepeat');
let endRepeat = document.querySelector('.endRepeat');
let offRepeat = document.querySelector('.offRepeat');
let audioplayer = document.querySelector('.audioplayer');
let songPlaying = false;
let songs = document.querySelector('.songs');
let clickCategory = document.querySelectorAll('.clickCategory');


let songList = [
    {
        picture: 'images/1.webp',
        song: 'audio/rock/Arctic Monkeys - 505.mp3',
        name: '505',
        singer: 'Arctic Monkeys',
        category: 'Rock'
    },
    {
        picture: 'images/1.webp',
        song: 'audio/rock/Arctic Monkeys - Arabella.mp3',
        name: 'Arabella',
        singer: 'Arctic Monkeys',
        category: 'Rock'
    },
    {
        picture: 'images/1.webp',
        song: 'audio/rock/Arctic Monkeys - Do I Wanna Know.mp3',
        name: 'Do I Wanna Know',
        singer: 'Arctic Monkeys',
        category: 'Rock'
    },
    {
        picture: 'images/1.webp',
        song: 'audio/rock/Arctic Monkeys - Fireside.mp3',
        name: 'Fireside',
        singer: 'Arctic Monkeys',
        category: 'Rock'
    },
    {
        picture: 'images/1.webp',
        song: 'audio/rock/Arctic Monkeys - I Wanna Be Yours.mp3',
        name: 'I Wanna Be Yours',
        singer: 'Arctic Monkeys',
        category: 'Rock'
    },
    {
        picture: 'images/1.webp',
        song: 'audio/rock/Arctic Monkeys - Knee Socks.mp3',
        name: 'Knee Socks',
        singer: 'Arctic Monkeys',
        category: 'Rock'
    },
    {
        picture: 'images/1.webp',
        song: 'audio/rock/Arctic Monkeys - One For The Road.mp3',
        name: 'One For The Road',
        singer: 'Arctic Monkeys',
        category: 'Rock'
    },
    {
        picture: 'images/1.webp',
        song: 'audio/rock/Arctic Monkeys - R U Mine.mp3',
        name: 'R U Mine',
        singer: 'Arctic Monkeys',
        category: 'Rock'
    },
    {
        picture: 'images/1.webp',
        song: 'audio/rock/Arctic Monkeys - Snap Out Of It.mp3',
        name: 'Snap Out Of It',
        singer: 'Arctic Monkeys',
        category: 'Rock'
    },
    {
        picture: 'images/1.webp',
        song: 'audio/rock/Arctic Monkeys - Whyd You Only Call Me When Youre High.mp3',
        name: 'Whyd You Only Call Me When Youre High',
        singer: 'Arctic Monkeys',
        category: 'Rock'
    },
    {
        picture: 'images/bethowen.jpg',
        song: 'audio/classic/betkhoven-koncert-dlja-fortepiano-5-allegro.mp3',
        name: 'fortepiano-5-allegro',
        singer: 'Bethoven',
        category: 'Classic'
    },
    {
        picture: 'images/bethowen.jpg',
        song: 'audio/classic/betkhoven-lunnaja-sonata (1).mp3',
        name: 'lunnaja-sonata',
        singer: 'Bethoven',
        category: 'Classic'
    },
    {
        picture: 'images/chaykovski.webp',
        song: 'audio/classic/chajjkovskijj-allegro-non-troppo.mp3',
        name: 'allegro-non-troppo',
        singer: 'Chaykovski',
        category: 'Classic'
    },
    {
        picture: 'images/chaykovski.webp',
        song: 'audio/classic/chajjkovskijj-barcarole.mp3',
        name: 'barcarole',
        singer: 'Chaykovski',
        category: 'Classic'
    },
    {
        picture: 'images/chaykovski.webp',
        song: 'audio/classic/chajjkovskijj-lake-in-moonlight.mp3',
        name: 'lake-in-moonlight',
        singer: 'Chaykovski',
        category: 'Classic'
    },
    {
        picture: 'images/chaykovski.webp',
        song: 'audio/classic/chajjkovskijj-pechalnaja-pesnja.mp3',
        name: 'pechalnaja-pesnja',
        singer: 'Chaykovski',
        category: 'Classic'
    },
    {
        picture: 'images/chaykovski.webp',
        song: 'audio/classic/chajjkovskijj-polka-dlja-tancev.mp3',
        name: 'polka-dlja-tancev',
        singer: 'Chaykovski',
        category: 'Classic'
    },
    {
        picture: 'images/chaykovski.webp',
        song: 'audio/classic/chajjkovskijj-tanec-malenkikh-lebedejj.mp3',
        name: 'tanec-malenkikh-lebedejj',
        singer: 'Chaykovski',
        category: 'Classic'
    },
    {
        picture: 'images/chaykovski.webp',
        song: 'audio/classic/chajjkovskijj-vals-cvetov (1).mp3',
        name: 'vals-cvetov',
        singer: 'Chaykovski',
        category: 'Classic'
    },
    {
        picture: 'images/chaykovski.webp',
        song: 'audio/classic/chajjkovskijj-vremena-goda-osennjaja-pesnja.mp3',
        name: 'vremena-goda-osennjaja-pesnja',
        singer: 'Chaykovski',
        category: 'Classic'
    },
    {
        picture: 'images/luis.jpg',
        song: 'audio/jazz/Louis Armstrong - Cabaret.mp3',
        name: 'Cabaret',
        singer: 'Luis Armstong',
        category: 'Jazz'
    },
    {
        picture: 'images/luis.jpg',
        song: 'audio/jazz/Louis Armstrong - Go Down Moses.mp3',
        name: 'Go Down Moses',
        singer: 'Luis Armstong',
        category: 'Jazz'
    },
    {
        picture: 'images/luis.jpg',
        song: 'audio/jazz/Louis Armstrong - Hello Dolly.mp3',
        name: 'Hello Dolly',
        singer: 'Luis Armstong',
        category: 'Jazz'
    },
    {
        picture: 'images/luis.jpg',
        song: 'audio/jazz/Louis Armstrong - La Vie En Rose (OST ВАЛЛ·И).mp3',
        name: 'La Vie En Rose (OST ВАЛЛ·И)',
        singer: 'Luis Armstong',
        category: 'Jazz'
    },
    {
        picture: 'images/luis.jpg',
        song: 'audio/jazz/Louis Armstrong - La Vie En Rose.mp3',
        name: 'La Vie En Rose',
        singer: 'Luis Armstong',
        category: 'Jazz'
    },
    {
        picture: 'images/luis.jpg',
        song: 'audio/jazz/Louis Armstrong - Let My People Go.mp3',
        name: 'Let My People Go',
        singer: 'Luis Armstong',
        category: 'Jazz'
    },
    {
        picture: 'images/luis.jpg',
        song: 'audio/jazz/Louis Armstrong - Remember Who You Are.mp3',
        name: 'Remember Who You Are',
        singer: 'Luis Armstong',
        category: 'Jazz'
    },
    {
        picture: 'images/luis.jpg',
        song: 'audio/jazz/Louis Armstrong - What A Wonderful World.mp3',
        name: 'What A Wonderful World',
        singer: 'Luis Armstong',
        category: 'Jazz'
    },
    {
        picture: 'images/luis.jpg',
        song: 'audio/jazz/Louis Armstrong - When Youre Smilling.mp3',
        name: 'When Youre Smilling',
        singer: 'Luis Armstong',
        category: 'Jazz'
    },
    {
        picture: 'images/tata.jpg',
        song: 'audio/rabis/Tata Simonyan - Chi Kareli (2013).mp3',
        name: 'Chi kareli',
        singer: 'Tata Simonyan',
        category: 'Rabis'
    },
    {
        picture: 'images/tata.jpg',
        song: 'audio/rabis/Tata Simonyan - Erku Arev (2014).mp3',
        name: 'Erku Arev',
        singer: 'Tata Simonyan',
        category: 'Rabis'
    },
    {
        picture: 'images/tata.jpg',
        song: 'audio/rabis/Tata Simonyan - Es inchic e vor.mp3',
        name: 'Es inchic e vor',
        singer: 'Tata Simonyan',
        category: 'Rabis'
    },
    {
        picture: 'images/tata.jpg',
        song: 'audio/rabis/Tata Simonyan - Jigyarov ser (2011).mp3',
        name: 'Jigyarov ser',
        singer: 'Tata Simonyan',
        category: 'Rabis'
    },
    {
        picture: 'images/tata.jpg',
        song: 'audio/rabis/Tata Simonyan - Kgnam Heru-Heru (2016).mp3',
        name: 'Kgnam Heru-Heru',
        singer: 'Tata Simonyan',
        category: 'Rabis'
    },
    {
        picture: 'images/tata.jpg',
        song: 'audio/rabis/Tata Simonyan - Qeznic heto (2011).mp3',
        name: 'Qeznic heto',
        singer: 'Tata Simonyan',
        category: 'Rabis'
    },
    {
        picture: 'images/tata.jpg',
        song: 'audio/rabis/Tata Simonyan - Siro Avetis (2014).mp3',
        name: 'Siro Avetis',
        singer: 'Tata Simonyan',
        category: 'Rabis'
    },
    {
        picture: 'images/tata.jpg',
        song: 'audio/rabis/Tata Simonyan - Tesel em (2011).mp3',
        name: 'Tesel em',
        singer: 'Tata Simonyan',
        category: 'Rabis'
    },
    {
        picture: 'images/tata.jpg',
        song: 'audio/rabis/Tata Simonyan - Vardavar (2011).mp3',
        name: 'Vardavar',
        singer: 'Tata Simonyan',
        category: 'Rabis'
    },
    {
        picture: 'images/tata.jpg',
        song: 'audio/rabis/Tata Simonyan ft Кристина Орбакайте - Mer siro ton@ (2013).mp3',
        name: 'Mer siro ton@',
        singer: 'Tata Simonyan',
        category: 'Rabis'
    },
    {
        picture: 'images/tupak.jpg',
        song: 'audio/rap/2Pac - All Eyez On Me.mp3',
        name: 'All Eyes On Me',
        singer: '2Pac',
        category: 'Rap'
    },
    {
        picture: 'images/tupak.jpg',
        song: 'audio/rap/2Pac - Breathin.mp3',
        name: 'Breathin',
        singer: '2Pac',
        category: 'Rap'
    },
    {
        picture: 'images/tupak.jpg',
        song: 'audio/rap/2Pac - Changes.mp3',
        name: 'Changes',
        singer: '2Pac',
        category: 'Rap'
    },
    {
        picture: 'images/tupak.jpg',
        song: 'audio/rap/2Pac - Hit Em Up.mp3',
        name: 'Hit Em Up',
        singer: '2Pac',
        category: 'Rap'
    },
    {
        picture: 'images/tupak.jpg',
        song: 'audio/rap/2Pac - Listen To Your Heart.mp3',
        name: 'Listen To Your Heart',
        singer: '2Pac',
        category: 'Rap'
    },
    {
        picture: 'images/tupak.jpg',
        song: 'audio/rap/2Pac - Open Fire.mp3',
        name: 'Open Fire',
        singer: '2Pac',
        category: 'Rap'
    },
    {
        picture: 'images/tupak.jpg',
        song: 'audio/rap/2Pac - President.mp3',
        name: 'President',
        singer: '2Pac',
        category: 'Rap'
    },
    {
        picture: 'images/tupak.jpg',
        song: 'audio/rap/2pac Feat. Dr. Dre - California Love.mp3',
        name: 'California Love',
        singer: '2Pac',
        category: 'Rap'
    }
]

function audioPlay() {
    songPlaying = true;
    audio.play();
}

function audioPause() {
    songPlaying = false;
    audio.pause();
}

undoSecond.onclick = () => {
    audio.currentTime = audio.currentTime - 10;
}

undoFirst.onclick = () => {
    audio.currentTime = audio.currentTime + 10;
}

songRange.addEventListener('input', function () {
    audio.currentTime = this.value * audio.duration / 100;
})

audioVolume.addEventListener('input', function () {
    audio.value = this.value / 100;
    percent.innerText = this.value + '%';
})

audio.addEventListener('timeupdate', () => {
    songRange.value = audio.currentTime * 100 / audio.duration;
    let curmins = Math.floor(audio.currentTime / 60);
    let cursec = Math.floor(audio.currentTime - curmins * 60);
    let durmins = Math.floor(audio.duration / 60);
    let dursec = Math.floor(audio.duration - durmins * 60);
    if (curmins < 10) {
        curmins = '0' + curmins
    }
    if (cursec < 10) {
        cursec = '0' + cursec
    }
    if (durmins < 10) {
        durmins = '0' + durmins
    }
    if (dursec < 10) {
        dursec = '0' + dursec
    }
    if (audio.currentTime > 0.001) {
        songTime.textContent = curmins + ':' + cursec;
        songDuration.textContent = durmins + ':' + dursec;
    }
})

function loadSong(songList) {
    nameSong.innerText = songList.name;
    nameSinger.innerText = songList.singer;
    nameCategory.innerText = songList.category;
    imgSinger.src = songList.picture;
    audio.src = songList.song;
    audioplayer.style = `background: url(${songList.picture}); background-size: cover; background-position: center;`;
}

let i = 0;
loadSong(songList[i])

function nextSong() {
    i++;
    if (i > songList.length - 1) {
        i = 0
    }
    loadSong(songList[i]);
    audioPlay();
    playPause.className = 'fa fa-pause'
}

next.onclick = () => nextSong();

function prevSong() {
    i--;
    if (i < 0) {
        i = songList.length - 1
    }
    loadSong(songList[i]);
    audioPlay();
    playPause.className = 'fa fa-pause'
}

prev.onclick = () => prevSong();




playPause.onclick = () => {
    if (!songPlaying) {
        audioPlay();
        playPause.className = 'fa fa-pause'
    }
    else {
        audioPause();
        playPause.className = 'fa fa-play'
    }
}



clickCategory.forEach(enterCategory => {
    enterCategory.onclick = () => {
        songs.innerHTML = ''
        let filt = songList.filter(fil => {
            if (enterCategory.getAttribute('data') == fil.category) {
                return fil
            }
        })
        filt.forEach(songFilt => {
            let songsDiv = document.createElement('div');
            songs.append(songsDiv);
            let img = document.createElement('img');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            songsDiv.append(img, h2, h3);
            img.src = songFilt.picture;
            h2.innerText = songFilt.singer;
            h3.innerText = songFilt.name;
            songsDiv.className = 'songsDiv';
        })
        let songsDiv = document.querySelectorAll('.songsDiv');
        songsDiv.forEach((playSong, i) => {
            playSong.onclick = () => {
                loadSong(filt[i]);
                audioPlay();
                playPause.className = 'fa fa-pause'
            }
        })
    }
})


let speedI = document.querySelectorAll('.speed');

buttonsSpeed.forEach((speed, i) => {
    speed.onclick = function () {
        audio.playbackRate = speedI[i].innerText;
    }
})


let a;
let set;

startRepeat.onclick = () => {
    a = audio.currentTime;
}

endRepeat.onclick = () => {
    let b = audio.currentTime;
    set = setInterval(() => {
        if (audio.currentTime >= b) {
            audio.currentTime = a;
        }
    },1000)
}

offRepeat.onclick = () => {
    clearInterval(set);
}