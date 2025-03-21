/** @format */

import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

//
// Avatar
//

const Avatar = React.forwardRef(
	(
		{ as: Tag = "div", ratio, size, status, type, className, ...props },
		ref
	) => {
		const classes = classNames(
			"avatar",
			ratio && `avatar-${ratio}`,
			size && `avatar-${size}`,
			status && `avatar-${status}`,
			type && `avatar-${type}`,
			className
		);

		return <Tag className={classes} ref={ref} {...props} />;
	}
);

Avatar.propTypes = {
	as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	ratio: PropTypes.string, // '4by3'
	size: PropTypes.string, // 'xs' | 'sm' | 'lg' | 'xl' | 'xxl'
	status: PropTypes.string, // 'online' | 'offline' | 'urgent' | 'delayed'
	type: PropTypes.string, // 'intake' | 'assessments' | 'checkins' | 'skillsbuilding' | 'insights' | 'journals' | 'custom' | 'welcome' | 'nurture' | 'reminders'
};

//
// Avatar group
//

Avatar.Group = React.forwardRef(
	({ as: Tag = "div", className, ...props }, ref) => {
		const classes = classNames("avatar-group", className);

		return <Tag className={classes} ref={ref} {...props} />;
	}
);

Avatar.Group.propTypes = {
	as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

//
// Avatar image
//

Avatar.Image = React.forwardRef(
	({ as: Tag = "img", className, ...props }, ref) => {
		const classes = classNames("avatar-img", className);

		return <Tag className={classes} ref={ref} {...props} />;
	}
);

Avatar.Image.propTypes = {
	as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

//
// Avatar title
//

Avatar.Title = React.forwardRef(
	({ as: Tag = "div", className, ...props }, ref) => {
		const classes = classNames("avatar-title", className);

		return <Tag className={classes} ref={ref} {...props} />;
	}
);

Avatar.Title.propTypes = {
	as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

//
// Avatar SVG
//

Avatar.SVG = React.forwardRef(
	({ as: Tag = "img", className, ...props }, ref) => {
		const classes = classNames("avatar-img", className);

		return <Tag className={classes} ref={ref} {...props} />;
	}
);

Avatar.SVG.propTypes = {
	as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default Avatar;
