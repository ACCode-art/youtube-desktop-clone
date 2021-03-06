const mainRight = document.querySelector('.main__right');
const allComments = document.querySelector('.allComments');
const mainInput = document.querySelector('.main__input');

const numberOfComments = document.querySelector('.numberOfComments');

const commentButton = document.querySelector('.comment__button');

const likeIcon = document.querySelector('.likeIcon');
const dislikeIcon = document.querySelector('.dislikeIcon');

const video = (document.querySelector('video').volume = 0.3);

const suggestedVideoArray = [
  {
    videoName: 'Another Nature Video',
    channelName: 'Nature For Begginers',
    views: '1M - 1 year ago',
    img:
      'https://images.pexels.com/photos/2922672/pexels-photo-2922672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    videoName: 'Space',
    channelName: 'Space Discovery',
    views: '2.6M - 3 years ago',
    img:
      'https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    videoName: 'This is a great video with content',
    channelName: 'Great Content',
    views: '6M - 6 months ago',
    img:
      'https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    videoName: 'How to travel',
    channelName: 'travelblog',
    views: '3M - 1 year ago',
    img:
      'https://images.pexels.com/photos/910213/pexels-photo-910213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    videoName: 'Why lions are lazy',
    channelName: 'Allthenature',
    views: '6M - 1 year ago',
    img:
      'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    videoName: 'When the moon crashed into earth (not clickbait)',
    channelName: "don't click",
    views: '6M - 6 months ago',
    img:
      'https://images.pexels.com/photos/748626/pexels-photo-748626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    videoName: 'This is a great video with content',
    channelName: 'Great Content',
    views: '6M - 6 months ago',
    img:
      'https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    videoName: 'How to travel',
    channelName: 'travelblog',
    views: '3M - 1 year ago',
    img:
      'https://images.pexels.com/photos/910213/pexels-photo-910213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    videoName: 'Why lions are lazy',
    channelName: 'Allthenature',
    views: '6M - 1 year ago',
    img:
      'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    videoName: 'When the moon crashed into earth (not clickbait)',
    channelName: "don't click",
    views: '6M - 6 months ago',
    img:
      'https://images.pexels.com/photos/748626/pexels-photo-748626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    videoName: 'This is a great video with content',
    channelName: 'Great Content',
    views: '6M - 6 months ago',
    img:
      'https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    videoName: 'How to travel',
    channelName: 'travelblog',
    views: '3M - 1 year ago',
    img:
      'https://images.pexels.com/photos/910213/pexels-photo-910213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    videoName: 'Why lions are lazy',
    channelName: 'Allthenature',
    views: '6M - 1 year ago',
    img:
      'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    videoName: 'When the moon crashed into earth (not clickbait)',
    channelName: "don't click",
    views: '6M - 6 months ago',
    img:
      'https://images.pexels.com/photos/748626/pexels-photo-748626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    videoName: 'This is a great video with content',
    channelName: 'Great Content',
    views: '6M - 6 months ago',
    img:
      'https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    videoName: 'How to travel',
    channelName: 'travelblog',
    views: '3M - 1 year ago',
    img:
      'https://images.pexels.com/photos/910213/pexels-photo-910213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    videoName: 'Why lions are lazy',
    channelName: 'Allthenature',
    views: '6M - 1 year ago',
    img:
      'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    videoName: 'When the moon crashed into earth (not clickbait)',
    channelName: "don't click",
    views: '6M - 6 months ago',
    img:
      'https://images.pexels.com/photos/748626/pexels-photo-748626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];

suggestedVideoArray.map((video) => {
  const { videoName, channelName, views, img } = video;

  const HTML = `  <div class="suggestedVideo">
   <div class="suggestedVideo__overlay">
      <i class="fa fa-play play" aria-hidden="true"></i>
    </div>
    <div class="suggestedVideo__left">
      <img
        src=${img}
      />
    </div>
    <div class="suggestedVideo__right">
      <p class="suggestedVideo__title">${videoName}</p>
      <div class="suggestedVideo__name">
        <p>${channelName}</p>
        <i class="fa fa-check" aria-hidden="true"></i>
      </div>
      <div class="suggestedVideo__views">
        <p>${views}</p>
      </div>
    </div>
  </div>`;

  mainRight.insertAdjacentHTML('afterbegin', HTML);
});

let commentsArray = [
  {
    avatar:
      'https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    channelName: 'MonkeyLad',
    commentBody:
      'aspernatur blanditiis sapiente est harum possimus ex itaque pariatur provident veritatis explicabo nostrum, temporibus tempore totam beatae magni. Ratione eaque cumque placeat deleniti modi quidem similique, obcaecati illum cupiditate quas distinctio, repellat magnam laudantium ipsam?',
    date: '2 months ago',
  },
  {
    avatar:
      'https://images.pexels.com/photos/7439731/pexels-photo-7439731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    channelName: 'TalkingPolitics',
    commentBody:
      'pariatur provident veritatis explicabo nostrum, temporibus tempore totam beatae magni. Ratione eaque cumque placeat deleniti modi quidem similique, obcaecati illum cupiditate quas distinctio, repellat magnam laudantium ipsam?',
    date: '3 months ago',
  },
  {
    avatar:
      'https://images.pexels.com/photos/1988686/pexels-photo-1988686.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    channelName: 'Turnedtheweansagainstus',
    commentBody:
      ' illo libero, voluptatibus vel nemo porro sunt voluptas! Non obcaecati quia ut veniam, aspernatur blanditiis sapiente est harum possimus ex itaque pariatur provident veritatis explicabo nostrum, temporibus tempore totam beatae magni. Ratione eaque cumque placeat deleniti modi quidem similique, obcaecati illum cupiditate quas distinctio, repellat magnam laudantium ipsam?',
    date: '4 months ago',
  },
  {
    avatar:
      'https://images.pexels.com/photos/2748239/pexels-photo-2748239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    channelName: 'blahem',
    commentBody:
      'sapiente est harum possimus ex itaque pariatur provident veritatis explicabo nostrum, temporibus tempore  modi quidem similique, obcaecati illum cupiditate quas distinctio, repellat magnam laudantium ipsam?',
    date: '1 year ago',
  },
  {
    avatar:
      'https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    channelName: 'darkweb',
    commentBody:
      ' illo libero, voluptatibus vel nemo porro sunt voluptas! Non obcaecati quia ut veniam, aspernatur blanditiis sapiente est harum possimus ex itaque pariatur provident veritatis explicabo nostrum, temporibus tempore totam beatae magni. Ratione eaque cumque placeat deleniti modi quidem similique, obcaecati illum cupiditate quas distinctio, repellat magnam laudantium ipsam?',
    date: '2 years ago',
  },
];

commentButton.addEventListener('click', () => {
  const comment__body = {
    avatar:
      'https://images.pexels.com/photos/2423932/pexels-photo-2423932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    channelName: 'Brenda Winegarden',
    commentBody: mainInput.value,
    date: new Date().toDateString(),
  };

  commentsArray.push(comment__body);

  const HTML = `<div class="comment">
  <div class="comment__left">
    <img
      src=${comment__body.avatar}
      alt=""
    />
  </div>
  <div class="comment__right">
    <p class="comment__channelName">
      ${comment__body.channelName}<span>${comment__body.date}</span>
    </p>
    <p class="comment__body">
    ${comment__body.commentBody}
    </p>
    <div class="comment__interaction">
      <i class="fa fa-thumbs-up mr" aria-hidden="true"></i>
      <p class="comment__likes mr"></p>
      <i class="fa fa-thumbs-down mr" aria-hidden="true"></i>
      <p class="reply">REPLY</p>
    </div>
    <div class="comment__replies">
      <i class="fa fa-caret-down" aria-hidden="true"></i>
      <p class="comment__viewReplies">View replies</p>
    </div>
  </div>
</div>`;

  allComments.insertAdjacentHTML('afterbegin', HTML);
  commentsLength += 1;
  numberOfComments.innerHTML = `${commentsLength} comments`;
  mainInput.value = '';
});

commentsArray.map((user) => {
  const { avatar, channelName, commentBody, date } = user;

  const HTML = `<div class="comment">
  <div class="comment__left">
    <img
      src=${avatar}
      alt=""
    />
  </div>
  <div class="comment__right">
    <p class="comment__channelName">
      ${channelName}<span>${date}</span>
    </p>
    <p class="comment__body">
    ${commentBody}
    </p>
    <div class="comment__interaction">
      <i class="fa fa-thumbs-up mr" aria-hidden="true"></i>
      <p class="comment__likes mr">32</p>
      <i class="fa fa-thumbs-down mr" aria-hidden="true"></i>
      <p class="reply">REPLY</p>
    </div>
    <div class="comment__replies">
      <i class="fa fa-caret-down" aria-hidden="true"></i>
      <p class="comment__viewReplies">View replies</p>
    </div>
  </div>
</div>`;

  allComments.insertAdjacentHTML('beforeend', HTML);
});

let commentsLength = commentsArray.length;

numberOfComments.innerHTML = `${commentsLength} comments`;

mainInput.addEventListener('click', () => {
  mainInput.style.borderBottom = '1px solid rgb(255, 255, 255)';
});

let like__count = document.querySelector('.like__count');
let dislike__count = document.querySelector('.dislike__count');

let isLiked = false;
let isDisliked = false;

let likeCount = 185;
let dislikeCount = 54;

like__count.textContent = likeCount;
dislike__count.textContent = dislikeCount;

likeIcon.addEventListener('click', () => {
  if (isLiked === true) {
    like__count.textContent = likeCount -= 1;
    likeIcon.classList.remove('color-white');
    isLiked = false;
  } else if (isLiked === false && isDisliked === false) {
    like__count.textContent = likeCount += 1;
    isLiked = true;
    likeIcon.classList.add('color-white');
  } else if (isLiked === false && isDisliked === true) {
    like__count.textContent = likeCount += 1;
    isLiked = true;
    isDisliked = false;
    likeIcon.classList.add('color-white');
    dislikeIcon.classList.remove('color-white');
    dislike__count.textContent = dislikeCount -= 1;
  }
});

dislikeIcon.addEventListener('click', () => {
  if (isDisliked === true) {
    dislike__count.textContent = dislikeCount -= 1;
    dislikeIcon.classList.remove('color-white');
    isDisliked = false;
  } else if (isDisliked === false && isLiked === true) {
    dislike__count.textContent = dislikeCount += 1;
    like__count.textContent = likeCount -= 1;
    isDisliked = true;
    isLiked = false;
    likeIcon.classList.remove('color-white');
    dislikeIcon.classList.add('color-white');
  } else if (isDisliked === false && isLiked === false) {
    dislike__count.textContent = dislikeCount += 1;
    isDisliked = true;
    isLiked = false;
    dislikeIcon.classList.add('color-white');
  }
});
