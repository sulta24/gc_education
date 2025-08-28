import * as React from 'react';

const MentorHexCard: React.FC = () => {
	const [isFlipped, setIsFlipped] = React.useState(false);

	const handleToggle = () => {
		setIsFlipped((prev) => !prev);
	};

	return (
		<div className={`hex-card${isFlipped ? ' is-flipped' : ''}`} onClick={handleToggle}>
			<div className="hex-card__inner">
				<div className="hex-face hex-face--front">
					<div className="mentor-hex">
						<div className="hex-front-content" aria-label="Tap to open">
							<div className="tap-circle">
								<span className="tap-circle__mark">?</span>
							</div>
							<div className="tap-label">Tap to open</div>
						</div>
					</div>
				</div>
				<div className="hex-face hex-face--back">
					<div className="mentor-hex mentor-hex--back">
						<div className="mentor-hex__inner" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MentorHexCard;

