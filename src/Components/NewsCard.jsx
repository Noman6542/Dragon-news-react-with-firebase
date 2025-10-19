import React from "react";
import { FaRegEye, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {id, title, author, total_view, rating, thumbnail_url, details } = news;

  return (
    <div className="card w-full bg-base-100 shadow-md mb-6">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toISOString().split("T")[0]}
            </p>
          </div>
        </div>
        <FaShareAlt className="text-gray-500 cursor-pointer hover:text-primary" />
      </div>

      {/* Title */}
      <h2 className="font-bold text-lg px-4 pb-2 leading-tight">{title}</h2>

      {/* Thumbnail */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-64 object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-4 py-3 text-sm text-gray-600">
        {details.length > 250 ? (
          <>
            {details.slice(0, 250)}...
            <Link to={`/news-details/${id}`} className="text-orange-500 font-medium cursor-pointer">
              {" "}
              Read More
            </Link>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < Math.round(rating.number)
                  ? "text-orange-400"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="ml-1 text-gray-700 font-semibold">
            {rating.number}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaRegEye className="text-gray-500" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
