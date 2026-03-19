import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import img1 from "@/app/assets/SliderImgs/Frame-17-2.png";
import img2 from "@/app/assets/SliderImgs/Frame-18-2.png";
import img3 from "@/app/assets/SliderImgs/Frame-19-2.png";

function Autocars() {
  return (
    <div style={{ minHeight: "100vh", width: "100%" }}>
      <ScrollStack useWindowScroll={true}>
        <ScrollStackItem>
          <img
            src={img1.src}
            alt="Card 1"
            style={{
              width: "100%",
              borderRadius: "20px",
              marginBottom: "1rem",
            }}
          />
          <h2>Card 1</h2>
          <p>This is the first card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem>
          <img
            src={img2.src}
            alt="Card 2"
            style={{
              width: "100%",
              borderRadius: "20px",
              marginBottom: "1rem",
            }}
          />
          <h2>Card 2</h2>
          <p>This is the second card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem>
          <img
            src={img3.src}
            alt="Card 3"
            style={{
              width: "100%",
              borderRadius: "20px",
              marginBottom: "1rem",
            }}
          />
          <h2>Card 3</h2>
          <p>This is the third card in the stack</p>
        </ScrollStackItem>
      </ScrollStack>
    </div>
  );
}

export default Autocars;
