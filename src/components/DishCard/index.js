import './index.css'

const Dishcard = () => (
  <div className="dishcard">
    {/* Left Heading */}
    <h1 className="mainheading">Main Courses Selected (0)</h1>

    {/* Right Side Toggle Images */}
    <div className="imagefilter">
      <img
        src="https://res.cloudinary.com/dztmp3saa/image/upload/v1757754698/Frame_19480_uk6pzu.png"
        alt="green filter"
        className="filter-icon"
      />
      <img
        src="https://res.cloudinary.com/dztmp3saa/image/upload/v1757754698/Frame_1000008679_u3obwr.png"
        alt="red filter"
        className="filter-icon"
      />
    </div>
  </div> 
 
)

export default Dishcard
