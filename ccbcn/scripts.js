;(function ($) {

    let video = document.querySelector('.viewer');


    class Player{
        constructor(element){
            this._player = element;
            this._progress = document.querySelector('.progress');
            this._progressBar = document.querySelector('.progress__filled');
            this._toggle = document.querySelector('.toggle');
            this._skipButtons = document.querySelectorAll('[data-skip]');
            this._ranges = document.querySelectorAll('.player__slider')
            this._mousedown = false;
            this._skipTime = 1;
        }



        init(){
         let self = this;
         if(!(this._player instanceof HTMLVideoElement) && !(this._player instanceof HTMLAudioElement))
             return console.error('You pass wrong element');
            this.readPlayerState();

            this.domEvent(self);
            this.playerEvent(self);

        }

        domEvent(self){
        this._toggle.addEventListener('click' , function (e) {
            self.togglePlay(e, self);
            });
            this._player.addEventListener('click' , function (e) {
                self.togglePlay(e, self);
            });
            this._ranges.forEach(range => range.addEventListener('change' , function (e) {
                self.handleRangeUpdate(e, range);
            }));
            this._ranges.forEach(range => range.addEventListener('mousemove' , function (e) {
                self.handleRangeUpdate(e, range);
            }));

            this._progress.addEventListener('click' , function (e) {
                self.scrub(e, this);
            });
            this._progress.addEventListener('mousemove' , function (e) {
                if(self._mousedown){
                    self.scrub(e, this);
                }

            });
            this._progress.addEventListener('mousedown' , () => this._mousedown = true);
            this._progress.addEventListener('mouseup' , () => this._mousedown = false);

            this._skipButtons.forEach(button => button.addEventListener('click' , function (e) {
                self.skip(parseFloat(button.dataset.skip));

            }));
            document.addEventListener('keyup' , function (e) {

                if(e.keyCode === 37){
                    self.skip(-self._skipTime)
                } else if (e.keyCode === 39){
                    self.skip(self._skipTime)
                }

            })
        }

        playerEvent(self){
            this._player.addEventListener('play' , function (e) {
                console.log('видео проигрывает');
                self.updateButton(e, self);
            });
            this._player.addEventListener('pause' , function (e) {
                console.log('видео остановилось');
                self.updateButton(e, self);
            });
            this._player.addEventListener('timeupdate', function (e) {
                self.handleProgress(e, self);
                self.savePlayerState();
            })
        }
        togglePlay(e, self){

            const method = this._player.paused ? 'play' : 'pause';
            this._player[method]();


        }

        updateButton(e, self){
            const icon = this._player.paused ? '►' : '❚ ❚';
            this._toggle.textContent = icon;
        }

        handleRangeUpdate(e, range){
        this._player[range.name] = range.value;
        }

        handleProgress(){
            const percent = (this._player.currentTime / this._player.duration) * 100;
            this._progressBar.style.width = '${percent}%';
        }
        savePlayerState(){
            const state= {
                currentTime: this._player.currentTime
            };
            localStorage.setItem('playerState', JSON.stringify(state));
        }
        readPlayerState(){
            if(!localStorage.getItem('playerState')) return console.info('player state no found');
            const state = JSON.parse(localStorage.getItem('playerState'));
            this._player.currentTime += state.currentTime;
        }

        scrub(e, progress){
            const scrubTime = (e.offsetX / progress.offsetWidth) * this._player.duration;
            this._player.currentTime = scrubTime;
        }
        skip( skipTime){
            this._player.currentTime += skipTime;
        }

    }



    let player = new Player(video);

    player.init();







})(jQuery);