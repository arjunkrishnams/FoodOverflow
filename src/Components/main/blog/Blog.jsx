import "./BlogStyles.css";
import "./ResponsiveBlog.css";
import { PostBlog } from "./PostBlog/PostBlog";

import BlogPic1 from "../../assets/blog_image_1.svg";
import BlogPic2 from "../../assets/bloco_image_2.svg";
import BlogPic3 from "../../assets/bloco_image_3.svg";
// import BlogPic4 from "../../../assets/bloco_image_4.svg";
import ProfilePic from "../../assets/profile.jpg";

export const Blog = () => {
  return (
    <section className="blog">
      <div className="blogWrapper">
        <div className="topInfo">
          <h2>Wall of Love</h2>
          <p>
            Hear from our donors and NGOs to really feel the impact of our movement!
          </p>
        </div>

        <div className="postsWrapper">
            <div className="postBtn">
            <button className="left">←</button>
            </div>
            
          <PostBlog
            src={BlogPic1}
            alt="alimento1"
            title="It's heart-warming to see the people we've helped!"
            profile={ProfilePic}
            name="Arjun Krishna"
            author="Arjun Krishna M S"
          />

          <PostBlog
            src={BlogPic2}
            alt="alimento2"
            title="Each plate of food is a plate of hope!"
            profile={ProfilePic}
            name="Sanjay Rajakumar"
            author="Sanjay Rajakumar"
          />

          <PostBlog
            src={BlogPic3}
            alt="alimento3"
            title="Feeding the hungry is the best feeling in the world!"
            profile={ProfilePic}
            name="MM"
            author="G Hitesh Reddy"
          />

          {/* <PostBlog
            src={BlogPic3}
            alt="alimento4"
            title="How to get stronger without Gym"
            profile={ProfilePic}
            name="Will"
            author="Atevilson Freitas"
          /> */}
          <div className="postBtn">
            <button className="rigth">→</button>
            </div>
        </div>
      </div>
    </section>
  );
};
