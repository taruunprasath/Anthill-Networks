import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../../index.css";

const reviews = [
  {
    id: 1,
    name: "Jane Smith",
    rating: 5,
    comment: "Amazing car! The buying process was seamless and the customer service was top-notch.",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "John Doe",
    rating: 4,
    comment: "Good experience overall. The car quality is excellent, but the delivery took a bit longer than expected.",
    avatar: "https://i.pravatar.cc/100?img=11",
  },
  {
    id: 3,
    name: "Michael Johnson",
    rating: 5,
    comment: "Highly recommend! The best car buying experience I've ever had.",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
];

const ReviewCard = ({ name, rating, comment, avatar }) => {
  return (
    <motion.div
      className="review-card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={avatar} alt={name} className="review-avatar" />
      <h3>{name}</h3>
      <div className="review-rating">
        {"⭐".repeat(rating)}
      </div>
      <p className="review-comment">"{comment}"</p>
    </motion.div>
  );
};

const Reviews = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="reviews-container"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="reviews-title">Community Reviews</h2>
      <motion.div 
        className="reviews-grid"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            <ReviewCard {...review} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Reviews;
