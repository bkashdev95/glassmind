/** @format */
//ORDER OF BASE DRIVES SECTION ORDERS
export default {
	base: {
		children: ["dashboard", "myclients", "onboard", "assignments"],
		id: "base",
	},

	dashboard: {
		icon: "grid",
		id: "dashboard",
		title: "Dashboard",
		url: "/",
	},
	//links to the pages/index.js file

	//INTAKE
	onboard: {
		children: ["clientNew", "clientExisting"],
		icon: "user-plus",
		id: "onboard",
		title: "Onboard Clients",
	},
	clientNew: {
		id: "clientNew",
		title: "Add New Client",
		url: "/client-new",
	},
	clientExisting: {
		id: "clientExisting",
		title: "Add Existing Client",
		url: "/client-existing",
	},

	//MY CLIENTS
	myclients: {
		icon: "heart",
		id: "myclients",
		title: "My Clients",
		url: "/clients",
	},

	//ASSIGNMENTS
	assignments: {
		children: [
			"assignmentCreate",
			"favAssignment",
			"assignmentIntake",
			"assignmentAssessment",
			"assignmentSkillsBuilding",
			"assignmentJournal",
			"assignmentCheckIn",
		],

		icon: "layers",
		id: "assignments",
		title: "Assignments",
	},

	assignmentCreate: {
		id: "assignmentCreate",
		title: "Create New",
		url: "/assignment-create",
	},

	favAssignment: {
		id: "favAssignment",
		title: "My Favorites",
		url: "/assignment-favorites",
	},

	assignmentIntake: {
		id: "assignmentIntake",
		title: "Intake",
		url: "/assignment-intake",
	},
	assignmentAssessment: {
		id: "assignmentAssessment",
		title: "Assessments",
		url: "/assignment-assessment",
	},
	assignmentJournal: {
		id: "assignmentJournal",
		title: "Journaling",
		url: "/assignment-journal",
	},

	assignmentCheckIn: {
		id: "assignmentCheckIn",
		title: "Check In",
		url: "/assignment-checkin",
	},

	assignmentSkillsBuilding: {
		id: "skillsbuilding",
		title: "Skills Building",
		url: "/assignment-skills-building",
	},

	//PRACTICE MANAGEMENT
	practicemanagement: {
		children: ["practice", "staff"],
		id: "practicemanagement",
		title: "Practice Management",
	},

	practice: {
		children: [
			"accountGeneral",
			"accountBilling",
			"accountMembers",
			"accountSecurity",
			"accountNotifications",
		],
		icon: "map-pin",
		id: "practice",
		title: "My Practice",
	},

	staff: {
		icon: "clipboard",
		id: "staff",
		title: "Staff",
		url: "/staff",
	},

	//PROMPT BUILDER
	prompts: {
		children: ["promptBuilder"],
		icon: "user",
		id: "promptbuilder",
		title: "Prompt Builder",
	},

	promptBuilder: {
		children: ["promptBuilderStart"],
		icon: "git-pull-request",
		id: "promptBuilder",
		title: "Prompt Builder",
	},
	promptBuilderStart: {
		id: "videos",
		title: "Prompt Builder",
		url: "/creators/prompt-builder",
	},

	accountGeneral: {
		id: "accountGeneral",
		title: "General",
		url: "/account-general",
	},
	accountBilling: {
		id: "accountBilling",
		title: "Billing",
		url: "/account-billing",
	},
	accountMembers: {
		id: "accountMembers",
		title: "Members",
		url: "/account-members",
	},
	accountSecurity: {
		id: "accountSecurity",
		title: "Security",
		url: "/account-security",
	},
	accountNotifications: {
		id: "accountNotifications",
		title: "Notifications",
		url: "/account-notifications",
	},
};
