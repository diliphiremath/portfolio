"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "../../../components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
						My name is Dilip. I graduated from KLE Institute of Technology, Hubballi, with a degree in information 
						science.
						</p>
						<p>
							During my last year of college, when we were developing our final project I found a passion
							in developing softwares and from there onwards started to learn new things and concepts about softwares.
						</p>
						<p className="my-3.5">
							After graduation, I started building web applications with a friend, eventually we started taking projects
							but we couldn't manage clients properly due to lack of experience so, we started looking out for job.
						</p>
						<p>
							Started my job career as a MERN stack developer. I always liked to try out new technologies and would
							contantly explore different parts of software and dig deep into concepts.
						</p>
						<p className="my-3.5">
							I worked in various domains and technologies in a course of my 6+ years of software journey. Started out as Front end 
							developer, then moved to backend developer also explored Devops. I always like to start a software from scratch and build 
							a highly scalable system. The thing exicites me is Architecture. I like to make small POC's and come up
							with good architecture.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
