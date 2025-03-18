/** @format */

import React from "react";
import { projects } from "/data";
import { ClientHeader, Projects } from "/widgets";

export default function ProfileProjects() {
	return (
		<div className='main-content'>
			<ClientHeader />
			<Projects projects={projects} />
		</div>
	);
}
