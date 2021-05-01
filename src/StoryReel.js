import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://www.megacritic.ru/media/reviews/photos/thumbnail/640x640s/2e/0e/bc/843650-22-1553011940.jpg"
        profileSrc="https://i.pinimg.com/originals/b5/f3/df/b5f3dfc780d9ebd09b58c8dbf3c4c623.jpg"
        title="don Corleone"
      />

      <Story image="https://tinypng.com/images/social/website.jpg" profileSrc="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" title="Ikkinchi" />
      <Story image="https://www.gizbot.com/images/2020-09/realme-7_159921061900.jpg" profileSrc="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png" title="The avatar" />
      <Story image="https://i2-prod.walesonline.co.uk/news/uk-news/article18917348.ece/ALTERNATES/s615b/0_254870178.jpg" profileSrc="https://shoptextile.uz/image/cache/catalog/image/cache/catalog/product/ST1235/ST1235_1-600x600.webp" title="Kiyim" />
      <Story image="https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg" profileSrc="https://cdn.flickeringmyth.com/wp-content/uploads/2019/07/batman-hush_dc-comics_gallery_5d1ce70d90a65-600x600.jpg" title="Batman" />
    </div>
  );
}

export default StoryReel;
