import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import Container from "./Container";

const Breadcrumb = () => {
  return (
    <div className="bg-[#f1f5f9] py-3">
      <Container>
        <div className="flex items-center gap-2 ">
          <Link to={"/"}>
            <h4 className=" hover:underline text-sm text-black/80">Home</h4>{" "}
          </Link>
          <ChevronRight className="text-black/60" strokeWidth={1} />
          <Link to={"/tops"}>
            <h4 className=" hover:underline text-sm text-black/80">Tops</h4>{" "}
          </Link>
          <ChevronRight className="text-black/60" strokeWidth={1} />
          <Link to={"/"}>
            <h4 className=" hover:underline text-sm text-black/80">T- Shirts</h4>{" "}
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Breadcrumb;
