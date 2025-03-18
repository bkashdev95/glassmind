/** @format */

export default function getStatusColor(status) {
	switch (status) {
		case "engaged":
			return "primary";
		case "delayed":
			return "warning";
		case "unavailable":
			return "warning";
		case "comprehension":
			return "warning";
		case "completed":
			return "success";
		case "urgent":
			return "urgent";
	}
}
