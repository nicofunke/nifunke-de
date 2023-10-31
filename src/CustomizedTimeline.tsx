import React, { ReactNode } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import { Fade } from "react-awesome-reveal";
import SchoolIcon from "@mui/icons-material/School";

type TimeLineEvent = {
  title: string;
  timestamp: string;
  description: ReactNode;
  color: "primary" | "secondary";
  badges?: string[];
};

const CustomTimeLineItem = ({
  timestamp,
  color,
  title,
  description,
  badges,
}: TimeLineEvent) => {
  return (
    <TimelineItem sx={{ height: 200 }}>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="body2"
      >
        <Fade direction="down" triggerOnce>
          {timestamp}
        </Fade>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color={color} />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2, m: "auto 0" }}>
        <Fade direction="down" cascade damping={0.2} triggerOnce>
          <Typography variant="h5" component="span">
            {title}
          </Typography>
          <Typography>{description}</Typography>
          {badges && <Typography>{badges.join(", ")}</Typography>}
        </Fade>
      </TimelineContent>
    </TimelineItem>
  );
};

const timelineEvents: TimeLineEvent[] = [
  {
    timestamp: "since 2023",
    title: "Software Engineer",
    description: "Sartorius AG",
    badges: ["React"],
    color: "primary",
  },
  {
    timestamp: "2020 - 2023",
    title: "Software Developer",
    description: "Prof. Schumann GmbH, Göttingen",
    badges: ["React", "Java"],
    color: "primary",
  },
  {
    timestamp: "2020",
    title: "Applied Computer Science M.Sc.",
    description: "Georg-August-Universität Göttingen",
    badges: ["Usability Engineering", "UI/UX", "Research"],
    color: "secondary",
  },
  {
    timestamp: "2019",
    title: "Research Internship",
    description: "Iran University of Science and Technology, Tehran",
    badges: ["IoT", "Computer Networks", "Research"],
    color: "secondary",
  },
  {
    timestamp: "2018 - 2019",
    title: "Web Development Internship",
    description: "Robert Bosch GmbH, Bamberg",
    badges: ["Angular", "PHP"],
    color: "primary",
  },
  {
    timestamp: "2017",
    title: "Applied Computer Science B.Sc.",
    description: "Georg-August-Universität Göttingen",
    badges: ["Scientific Computing", "Research", "Algorithmic Methods"],
    color: "secondary",
  },
  {
    timestamp: "2014 - 2020",
    title: "Student Research Assistant",
    description: "Georg-August-Universität Göttingen",
    badges: ["Teaching", "Research", "IoT", "Maths"],
    color: "secondary",
  },
];

export function CustomizedTimeline() {
  return (
    <Timeline position="alternate" sx={{ width: "100%" }}>
      {timelineEvents.map((event) => (
        <CustomTimeLineItem {...event} key={event.title} />
      ))}
    </Timeline>
  );
}
