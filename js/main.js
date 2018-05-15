

//variables
const img = document.querySelector('.btn__img');
const hamburger = document.querySelector('.nav__hamburger');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay-nav');
const list = document.querySelector('.list');
const showcase = document.querySelector('.showcase');


//create li in mobile menu
$(function(){
  let liIcons =`<li class="list__item-icons">
  <svg width="25" height="25" viewBox="0 0 24 24">
    <image width="24" height="24" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiBQgSCDEcqUqaAAAAuElEQVQ4y+2RMQrCQBBF34qNmCJIesHGnEC8hGDpcXIPr5C9gJVtLmCdwt5UQUEYi+zKCrtrFlunWv7Mn/93PlJLStVKhKSapI3D9Ev/QcMNmLMlAyDq+CiFZcp5gGIE7UpZQuwPlRcN7u9Mfy2tC4cVDIEdy7SzZj/m4Eu64QA81RVAcnIALsxCwd1V62zs6EAWw/h4Syv78CkUsgd6dQKQkhLYvLvBHIwtqT7h5Cv9CeMIOmlevwD1aOO/mSfCrwAAAABJRU5ErkJggg=="/>
  </svg>
  <svg width="25" height="25"viewBox="0 0 24 18">                                 
    <image  width="24" height="18" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAQAAADr5dYVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiBQgSCTUC37/CAAABJUlEQVQoz42SsUtCURTGv2cWPrElaAsH3QJraCoQWoIakmhoUOfoP2gJgra2IIiguWiNsCGMSCgIoiFoaokmiTIcLAp6v4bS3rvvlu83nvt9h++ecySRkBWG2KEOvLDPsEQvRdKSOKBskY/wxC+vHNHkUBIOb8AqPQF5jFtMHlhhTfTxCcAFYz7DBDauGJDEdadQoYArSZQs8ur3m5gLlFvU2GLXYtiQpDj9ymlPxU6apPLKW8f23P5eg2jMS1LM8bStKHiqtSeSoBqh/7F/6imWqXcxzPgNGd67yE/MQ1j8V94kE76dKc5/dm7ywbT9OpOs44XkLQpBWQqXNLNsWvdxQ87sO8npH8nvWSJu5nAkiawWNK5RDcoVetSdLlXRmeOFg38BCMLoAm2YCvcAAAAASUVORK5CYII="/>
  </svg>
  <svg width="25" height="25" viewBox="0 0 24 17">
    <image width="24" height="17" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAARCAQAAABtcaS7AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiBQgSChUSnMzJAAABHUlEQVQoz42TMSxDURSGv1cVEWUwdSQGYZJ0JamkoSsxsZgkEquE1cDIIGKymMRktTGg0pXJILF0k1CSovkM76Xa1z780829/7l/7vnOhUgWPLGivnjpqt38Jgc8tVV3jiTbe7y2XVvJBXuRpeSiOWc9Vo8MkuzDfql6YKqxN2VXzDXohOPhclvV27glVrCsPgKkmAFgJ6jzLwW+kgH6gyqARTaaTp+DOXCNBbKMUuMGUPW9JfpHny1NUTVNlQy9ZsKEmMKLHrhoTiirOh8lZM2bN++Kqvftj05zTg7Y9CyoQ1ChEg4KAFedGjYUcThs4jBtTdViBw7gboP0kjkL7vuhajmBdsIsvTmWzLF9Wp+c/INg4z9ULbluX5LvG5CyIvpPf1M4AAAAAElFTkSuQmCC"/>
  </svg>
  </li>`
  $(".nav__hamburger").click(function(){
    if (liIcons != '') {
      $(".list__item-active").after(liIcons);
      liIcons = '';
      } else {
          $('.list__item-active').next().toggle();
      }
  });
});

// rotate img after click
img.addEventListener('click', function(){
  img.classList.toggle('btn__img-rotate');
})


// hamburger menu
hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('open');
  nav.classList.toggle('overlay-nav');
  list.classList.toggle('overlay');
  showcase.classList.toggle('beneath');
})

