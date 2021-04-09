const mainRight = document.querySelector('.main__right');
const allComments = document.querySelector('.allComments');

const numberOfComments = document.querySelector('.numberOfComments');

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

const commentsArray = [
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
      <i class="fa fa-thumbs-up mr" aria-hidden="true"></i>
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

const commentsLength = commentsArray.length;

numberOfComments.innerHTML = `${commentsLength} comments`;
