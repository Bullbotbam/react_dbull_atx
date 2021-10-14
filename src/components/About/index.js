import React from 'react';
import { Container, Typography, Avatar, Box } from '@material-ui/core';
import coverImage from '../../assets/cover/dbull_atx_logo.png';

function About() {
	return (
		<Container>
			<div className="container" style={{ color: '#757575' }}>
				<Box display="flex" justifyContent="center">
					<Avatar
						style={{
							height: '384px',
							width: '384px',
						}}
						alt="dbull avatar"
						src={coverImage}
					/>
				</Box>
				<div className="my-2">
					<Typography
						className="about-title"
						gutterBottom
						variant="h2"
						id="about"
					>
						Who is dBull?
					</Typography>

					<Typography
						className="about-body"
						style={{ textAlign: 'justify' }}
						variant="h5"
					>
						My broad knowledge base and critical thinking skills have allowed me
						to be a benefit to every team I have been a part of. To my peers, I
						have been known to offer insightful analysis to challenges they may
						face. One of my best skills is the ability to listen to the needs of
						my customers. It may feel obvious as well that you are obligated to
						actually pay attention to your customers, so that you know what
						their needs may be.
						<br />
						<br />I am a believer in detailed communication and the necessity
						for team collaboration. Which is no replacement for hard work and
						determination. Two more of my notable skills. In my past roles as a
						manager or director I have gained a broad analysis of effective
						management and team building. Through solid research and exploration
						I persistently quest for new techniques or methods to enhance my
						abilities. I find discovery an essential role in business
						development and enhances preparedness.
						<br />
						<br />
						This is why I consider myself a lifelong learner...
					</Typography>
				</div>
			</div>
		</Container>
	);
}

export default About;
