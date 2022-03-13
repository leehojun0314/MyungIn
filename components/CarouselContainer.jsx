/* eslint-disable @next/next/no-img-element */
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselContainer() {
	return (
		<Carousel
			showStatus={false}
			showThumbs={false}
			dynamicHeight={true}
			autoPlay={true}
		>
			<div>
				<img
					src="images/main/cam_visual.jpg"
					width="730"
					height="801"
					border="0"
					alt=""
				/>
			</div>
			<div>
				<img
					src="images/main/cam_visual.jpg"
					width="730"
					height="801"
					border="0"
					alt=""
				/>
			</div>
			<div>
				<img
					src="images/main/cam_visual.jpg"
					width="730"
					height="801"
					border="0"
					alt=""
				/>
			</div>
		</Carousel>
	);
}
