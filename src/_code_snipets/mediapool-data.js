export const clipsMediaPool = [
	{ id: 0, clipname: "Timeline 1" },
	{ id: 1, clipname: "GamePlay_1" },
	{ id: 2, clipname: "GamePlay_2" },
	{ id: 3, clipname: "GamePlay_3" },
	{ id: 4, clipname: "GamePlay_4" },
	{ id: 5, clipname: "GamePlay_5" },
	{ id: 6, clipname: "GamePlay_6" },
	{ id: 7, clipname: "GamePlay_7" },
	{ id: 8, clipname: "GamePlay_8" },
	{ id: 9, clipname: "GamePlay_9" },
	{ id: 10, clipname: "GamePlay_10" },
	{ id: 11, clipname: "GamePlay_11" },
	{ id: 12, clipname: "GamePlay_12" },
	{ id: 13, clipname: "GamePlay_13" },
	{ id: 14, clipname: "GamePlay_14" },
	{ id: 15, clipname: "GamePlay_15" },
	{ id: 16, clipname: "GamePlay_16" },
	{ id: 17, clipname: "GamePlay_17" },
	{ id: 18, clipname: "GamePlay_18" },
	{ id: 19, clipname: "GamePlay_19" },
	{ id: 20, clipname: "GamePlay_20" },
	{ id: 21, clipname: "GamePlay_21" },
	{ id: 22, clipname: "GamePlay_22" },
	{ id: 23, clipname: "GamePlay_23" },
	{ id: 24, clipname: "GamePlay_24" },
	{ id: 25, clipname: "GamePlay_25" },
];

export const cameraSource = [
	{ id: 0, label: "FaceTime HD Camera" },
	{ id: 1, label: "Blackmagic Design" },
	{ id: 2, label: "Blackmagic UltraStudio Mini" },
];

export const audioSource = [
	{ id: 0, label: "Internal Microphone" },
	{ id: 1, label: "RODE IA" },
	{ id: 2, label: "Blackmagic Design" },
	{ id: 3, label: "Mute Audio" },
];

export const colorPickerType = [
	{ id: 0, classe: "picker-solid" },
	{ id: 1, classe: "picker-gradient" },
	{ id: 2, classe: "picker-radial" },
	{ id: 3, classe: "shapes" },
];

export const solidColorList = [
	{ id: 0, color: "#FFF" },
	{ id: 1, color: "#F4C10E" },
	{ id: 2, color: "#0EF40E" },
	{ id: 3, color: "#2037FB" },
	{ id: 4, color: "#780EF4" },
	{ id: 5, color: "#F40EC0" },
	{ id: 6, color: "#F4310E" },
	{ id: 7, color: "#F4550E" },
	{ id: 8, color: "#B6FEBD" },
	{ id: 9, color: "#B6E5FE" },
	{ id: 10, color: "#E8B6FE" },
	{ id: 11, color: "#FEB6ED" },
	{ id: 12, color: "#FEB6B6" },
	{ id: 13, color: "#FEDBB6" },
	{ id: 14, color: "#FEF8B6" },
	{ id: 15, color: "#757575" },
	{ id: 16, color: "#272727" },
	{ id: 17, color: "#000000" },
	{ id: 18, color: "#9F5E25" },
	{ id: 19, color: "#563212" },
	{ id: 20, color: "#231102" },
];

export const shapeList = [
	{ id: 1, classe: "" },
	{ id: 2, classe: "" },
	{ id: 3, classe: "" },
	{ id: 4, classe: "" },
	{ id: 5, classe: "" },
	{ id: 6, classe: "" },
	{ id: 7, classe: "" },
];

export const sortMenu = [
	{ id: 0, label: "Timecode", css: "timecode" },
	{ id: 1, label: "Camera", css: "camera" },
	{ id: 2, label: "Date Time", css: "duration" },
	{ id: 3, label: "Clip Name", css: "name" },
	{ id: 4, label: "", css: "" },
	{ id: 5, label: "Scene / Shot", css: "clapper" },
	{ id: 6, label: "Clip Color", css: "color" },
	{ id: 7, label: "Date Used", css: "date-added" },
	{ id: 8, label: "Keywords", css: "keywords" },
	{ id: 9, label: "", css: "" },
];

export const sortMenuOrder = [
	{ id: 0, label: "Ascending Order" },
	{ id: 1, label: "Descending Order" },
	{ id: 2, label: "", css: "" },
	{ id: 3, label: "Display flat view bins" },
	{ id: 4, label: "Show only good takes" },
];

export const timeCodeList = [
	{
		id: 0,
		header: "00:09:00:00",
		thumb: "interview-09",
		title: "09:15:23:15,\xa0 07 Dec 2019",
		clipcolor: "#E27000",
		subtitle1:
			"A001_10041406_C025 \xa0 \xa0 Cam A \xa0 \xa0 Scene 2 \xa0 \xa0 Shot 1 \xa0 \xa0 Take 1",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 48 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:19:42:08",
	},
	{
		id: 1,
		header: false,
		thumb: "interview-07",
		title: "09:21:59:06,\xa0 07 Dec 2019",
		clipcolor: "#00537B",
		subtitle1:
			"A001_10041323_C007 \xa0 \xa0 Cam A \xa0 \xa0 Scene 2 \xa0 \xa0 Shot 2 \xa0 \xa0 Take 1",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 48 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:36:24:02",
	},
	{
		id: 2,
		header: "00:10:00:00",
		thumb: "interview-04",
		title: "10:14:11:00,\xa0 07 Dec 2019",
		clipcolor: "#009B9A",
		subtitle1:
			"A004_12070413_C065 \xa0 \xa0 Cam A \xa0 \xa0 Scene 3 \xa0 \xa0 Shot 2 \xa0 \xa0 Take 1",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:36:24:02",
	},
	{
		id: 3,
		header: "00:11:00:00",
		thumb: "interview-06",
		title: "11:02:22:02,\xa0 07 Dec 2019",
		clipcolor: "#F886B7",
		subtitle1:
			"A004_12070313_C030 \xa0 \xa0 Cam A \xa0 \xa0 Scene 3 \xa0 \xa0 Shot 1 \xa0 \xa0 Take 2",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:18:41:00",
	},
	{
		id: 3,
		header: "00:12:00:00",
		stickyBottom: "sticky2",
		thumb: "interview-01",
		title: "12:24:59:06,\xa0 06 Dec 2019",
		clipcolor: "#E27000",
		subtitle1:
			"A001_10031254_c001 \xa0 \xa0 Cam A \xa0 \xa0 Scene 1 \xa0 \xa0 Shot 1 \xa0 \xa0 Take 1",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:53:17:12",
	},
	{
		id: 4,
		header: false,
		thumb: "interview-08",
		title: "12:26:32:06,\xa0 06 Dec 2019",
		clipcolor: "#A3C800",
		subtitle1:
			"C002_10031254_c001 \xa0 \xa0 Cam C \xa0 \xa0 Scene 1 \xa0 \xa0 Shot 1 \xa0 \xa0 Take 2",
		subtitle2:
			"3840 x 2160 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:24:12:09",
		meta: true,
	},
	{
		id: 5,
		header: false,
		thumb: "interview-02",
		title: "12:29:10:01,\xa0 06 Dec 2019",
		clipcolor: "#E27000",
		subtitle1:
			"B021_10031331_C001 \xa0 \xa0 Cam B \xa0 \xa0 Scene 1 \xa0 \xa0 Shot 2 \xa0 \xa0 Take 1",
		subtitle2:
			"3840 x 2160 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 01:02:15:02",
	},
	{
		id: 6,
		header: "00:13:00:00",
		thumb: "interview-03",
		title: "13:11:09:16,\xa0 06 Dec 2019",
		clipcolor: "#00537B",
		subtitle1:
			"B021_10031347_C002 \xa0 \xa0 Cam B \xa0 \xa0 Scene 1 \xa0 \xa0 Shot 3 \xa0 \xa0 Take 1",
		subtitle2:
			"3840 x 2160 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:36:24:02",
	},
	{
		id: 7,
		header: "00:14:00:00",
		thumb: "interview-05",
		title: "14:01:12:00,\xa0 06 Dec 2019",
		clipcolor: "#E27000",
		subtitle1:
			"C005_12060348_C001 \xa0 \xa0 Cam C \xa0 \xa0 Scene 1 \xa0 \xa0 Shot 4 \xa0 \xa0 Take 1",
		subtitle2:
			"3840 x 2160 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 01:01:05:23",
		meta: true,
	},
];

export const cameraSorting = [
	{
		header: "Camera A",
		thumb: "interview-01",
		title: "Camera A,\xa0 06 Dec 2019",
		clipcolor: "#E27000",
		subtitle1:
			"A001_10031254_C001 \xa0 \xa0 12:24:59:06 \xa0 \xa0 Scene 1 \xa0 \xa0Shot 1 \xa0 \xa0Take 1",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:53:17:12",
	},
	{
		header: false,
		thumb: "interview-09",
		title: "Camera A,\xa0 07 Dec 2019",
		clipcolor: "#E27000",
		subtitle1:
			"A001_10041406_C025 \xa0 \xa0 09:15:23:15 \xa0 \xa0 Scene 2 \xa0 \xa0Shot 1 \xa0 \xa0Take 1",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 48 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:19:42:08",
	},
	{
		header: false,
		thumb: "interview-07",
		title: "Camera A,\xa0 07 Dec 2019",
		clipcolor: "#00537B",
		subtitle1:
			"A001_10041323_C007 \xa0 \xa0 09:21:59:06 \xa0 \xa0 Scene 2 \xa0 \xa0Shot 2 \xa0 \xa0Take 1",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 48 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:36:24:02",
	},
	{
		header: false,
		thumb: "interview-04",
		title: "Camera A,\xa0 07 Dec 2019",
		clipcolor: "#009B9A",
		subtitle1:
			"A004_12070413_C065 \xa0 \xa0 10:14:11:00 \xa0 \xa0 Scene 3 \xa0 \xa0Shot 2 \xa0 \xa0Take 1",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:36:24:02",
	},
	{
		header: false,
		thumb: "interview-06",
		title: "Camera A,\xa0 07 Dec 2019",
		clipcolor: "#F886B7",
		subtitle1:
			"A004_12070313_C030 \xa0 \xa0 11:02:22:02 \xa0 \xa0 Scene 3 \xa0 \xa0Shot 1 \xa0 \xa0Take 2",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:18:41:00",
	},
	{
		header: "Camera B",
		thumb: "interview-02",
		stickyBottom: true,
		identifier: "camerasticky1",
		title: "Camera B,\xa0 06 Dec 2019",
		clipcolor: "#E27000",
		subtitle1:
			"B021_10031331_C001 \xa0 \xa0 12:29:10:01 \xa0 \xa0 Scene 1 \xa0 \xa0Shot 2 \xa0 \xa0Take 1",
		subtitle2: "3840 x 2160 / 24 fps / 2 Ch / 01:02:15:02",
	},
	{
		header: false,
		thumb: "interview-03",
		title: "Camera B,\xa0 06 Dec 2019",
		clipcolor: "#00537B",
		subtitle1:
			"B021_10031347_C002 \xa0 \xa0 13:11:09:16 \xa0 \xa0 Scene 1 \xa0 \xa0Shot 3 \xa0 \xa0Take 1",
		subtitle2:
			"3840 x 2160 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:36:24:02",
	},
	{
		header: "Camera C",
		thumb: "interview-08",
		stickyBottom: true,
		identifier: "camerasticky2",
		title: "Camera C,\xa0 06 Dec 2019",
		clipcolor: "#A3C800",
		subtitle1:
			"C002_10031254_c001 \xa0 \xa0 12:26:32:06 \xa0 \xa0 Scene 1 \xa0 \xa0Shot 1 \xa0 \xa0Take 2",
		subtitle2:
			"3840 x 2160 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:24:12:09",
		meta: true,
	},
	{
		header: false,
		thumb: "interview-05",
		title: "Camera C,\xa0 06 Dec 2019",
		clipcolor: "#E27000",
		subtitle1:
			"C005_12060348_C001 \xa0 \xa0 14:01:12:00 \xa0 \xa0 Scene 1 \xa0 \xa0Shot 4 \xa0 \xa0Take 1",
		subtitle2:
			"3840 x 2160 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 01:01:05:23",
		meta: true,
	},
];

export const dateTimeSorting = [
	{
		header: "December",
		thumb: "interview-01",
		title: "06 Dec 2019,\xa0 12:24:59:06",
		clipcolor: "#E27000",
		subtitle1:
			"A001_10031254_c001 \xa0 \xa0 Cam A \xa0 \xa0 Scene 1 \xa0 \xa0 Shot 1 \xa0 \xa0 Take 1",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:53:17:12",
	},
	{
		header: false,
		thumb: "interview-08",
		title: "06 Dec 2019,\xa0 12:26:32:06",
		clipcolor: "#A3C800",
		subtitle1:
			"C002_10031254_c001 \xa0 \xa0 Cam C \xa0 \xa0 Scene 1 \xa0 \xa0 Shot 1 \xa0 \xa0 Take 2",
		subtitle2:
			"3840 x 2160 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:24:12:09",
		meta: true,
	},
	{
		header: false,
		thumb: "interview-02",
		title: "06 Dec 2019,\xa0 12:29:10:01",
		clipcolor: "#E27000",
		subtitle1:
			"B021_10031331_C001 \xa0 \xa0 Cam B \xa0 \xa0 Scene 1 \xa0 \xa0 Shot 2 \xa0 \xa0 Take 1",
		subtitle2:
			"3840 x 2160 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 01:02:15:02",
	},
	{
		header: false,
		thumb: "interview-03",
		title: "06 Dec 2019,\xa0 13:11:09:16",
		clipcolor: "#00537B",
		subtitle1:
			"B021_10031347_C002 \xa0 \xa0 Cam B \xa0 \xa0 Scene 1 \xa0 \xa0 Shot 3 \xa0 \xa0 Take 1",
		subtitle2:
			"3840 x 2160 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:36:24:02",
	},
	{
		header: false,
		thumb: "interview-05",
		title: "06 Dec 2019,\xa0 14:01:12:00",
		clipcolor: "#E27000",
		subtitle1:
			"C005_12060348_C001 \xa0 \xa0 Cam C \xa0 \xa0 Scene 1 \xa0 \xa0 Shot 4 \xa0 \xa0 Take 1",
		subtitle2:
			"3840 x 2160 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 01:01:05:23",
		meta: true,
	},
	{
		header: false,
		thumb: "interview-09",
		title: "07 Dec 2019,\xa0 09:15:23:15",
		clipcolor: "#E27000",
		subtitle1:
			"A001_10041406_C025 \xa0 \xa0 Cam A \xa0 \xa0 Scene 2 \xa0 \xa0 Shot 1 \xa0 \xa0 Take 1",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 48 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:19:42:08",
	},
	{
		header: false,
		thumb: "interview-07",
		title: "07 Dec 2019,\xa0 09:21:59:06",
		clipcolor: "#00537B",
		subtitle1:
			"A001_10041323_C007 \xa0 \xa0 Cam A \xa0 \xa0 Scene 2 \xa0 \xa0 Shot 2 \xa0 \xa0 Take 1",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 48 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:36:24:02",
	},
	{
		header: false,
		thumb: "interview-04",
		title: "07 Dec 2019,\xa0 10:14:11:00",
		clipcolor: "#009B9A",
		subtitle1:
			"A004_12070413_C065 \xa0 \xa0 Cam A \xa0 \xa0 Scene 3 \xa0 \xa0 Shot 2 \xa0 \xa0 Take 1",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:36:24:02",
	},
	{
		header: false,
		thumb: "interview-06",
		title: "07 Dec 2019,\xa0 11:02:22:02",
		clipcolor: "#F886B7",
		subtitle1:
			"A004_12070313_C030 \xa0 \xa0 Cam A \xa0 \xa0 Scene 3 \xa0 \xa0 Shot 1 \xa0 \xa0 Take 2",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:18:41:00",
	},
];

export const clipNameSorting = [
	{
		header: "A",
		thumb: "interview-01",
		title: "A001_10031254_c001,\xa0 06 Dec 2019",
		clipcolor: "#E27000",
		subtitle1:
			"12:24:59:06 \xa0 \xa0 Cam A \xa0 \xa0 Scene 1 \xa0 \xa0 Shot 1 \xa0 \xa0 Take 1",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:53:17:12",
	},
	{
		header: false,
		thumb: "interview-09",
		title: "A001_10041406_C025,\xa0 07 Dec 2019",
		clipcolor: "#E27000",
		subtitle1:
			"09:15:23:15 \xa0 \xa0 Cam A \xa0 \xa0 Scene 2 \xa0 \xa0 Shot 1 \xa0 \xa0 Take 1",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 48 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:19:42:08",
	},
	{
		header: false,
		thumb: "interview-07",
		title: "A001_10041323_C007,\xa0 07 Dec 2019",
		clipcolor: "#00537B",
		subtitle1:
			"09:21:59:06 \xa0 \xa0 Cam A \xa0 \xa0 Scene 2 \xa0 \xa0 Shot 2 \xa0 \xa0 Take 1",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 48 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:36:24:02",
	},
	{
		header: false,
		thumb: "interview-04",
		title: "A004_12070413_C065,\xa0 07 Dec 2019",
		clipcolor: "#009B9A",
		subtitle1:
			"10:14:11:00 \xa0 \xa0 Cam A \xa0 \xa0 Scene 3 \xa0 \xa0 Shot 2 \xa0 \xa0 Take 1",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:36:24:02",
	},
	{
		header: false,
		thumb: "interview-06",
		title: "A004_12070313_C030,\xa0 07 Dec 2019",
		clipcolor: "#F886B7",
		subtitle1:
			"11:02:22:02 \xa0 \xa0 Cam A \xa0 \xa0 Scene 3 \xa0 \xa0 Shot 1 \xa0 \xa0 Take 2",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:18:41:00",
	},
	{
		header: "B",
		stickyBottom: true,
		identifier: "clipnamesticky1",
		thumb: "interview-02",
		title: "B021_10031331_C001,\xa0 06 Dec 2019",
		clipcolor: "#E27000",
		subtitle1:
			"12:29:10:01 \xa0 \xa0 Cam B \xa0 \xa0 Scene 1 \xa0 \xa0 Shot 2 \xa0 \xa0 Take 1",
		subtitle2:
			"3840 x 2160 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 01:02:15:02",
	},
	{
		header: false,
		thumb: "interview-03",
		title: "B021_10031347_C002,\xa0 06 Dec 2019",
		clipcolor: "#00537B",
		subtitle1:
			"13:11:09:16 \xa0 \xa0 Cam B \xa0 \xa0 Scene 1 \xa0 \xa0 Shot 3 \xa0 \xa0 Take 1",
		subtitle2:
			"3840 x 2160 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:36:24:02",
	},
	{
		header: "C",
		stickyBottom: true,
		identifier: "clipnamesticky2",
		thumb: "interview-08",
		title: "C002_10031254_c001,\xa0 06 Dec 2019",
		clipcolor: "#A3C800",
		subtitle1:
			"12:26:32:06 \xa0 \xa0 Cam C \xa0 \xa0 Scene 1 \xa0 \xa0 Shot 1 \xa0 \xa0 Take 2",
		subtitle2:
			"3840 x 2160 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:24:12:09",
		meta: true,
	},
	{
		header: false,
		thumb: "interview-05",
		title: "C005_12060348_C001,\xa0 06 Dec 2019",
		clipcolor: "#E27000",
		subtitle1:
			"14:01:12:00 \xa0 \xa0 Cam C \xa0 \xa0 Scene 1 \xa0 \xa0 Shot 4 \xa0 \xa0 Take 1",
		subtitle2:
			"3840 x 2160 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 01:01:05:23",
		meta: true,
	},
];

export const sceneShotSorting = [
	{
		header: "Scene 1",
		thumb: "interview-01",
		title: "Scene 1,\xa0 Shot 1,\xa0 Take 1 ",
		clipcolor: "#E27000",
		subtitle1:
			"A001_10031254_c001 \xa0 \xa0 12:24:59:06 \xa0 \xa0 06 Dec 2019 \xa0 \xa0 Cam A",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:53:17:12",
	},
	{
		header: false,
		thumb: "interview-08",
		stickyBottom: true,
		identifier: "clipnamesticky2",
		title: "Scene 1,\xa0 Shot 1,\xa0 Take 2",
		clipcolor: "#A3C800",
		subtitle1:
			"C002_10031254_c001 \xa0 \xa0 12:26:32:06 \xa0 \xa0 06 Dec 2019 \xa0 \xa0 Cam C",
		subtitle2:
			"3840 x 2160 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:24:12:09",
		meta: true,
	},
	{
		header: false,
		thumb: "interview-05",
		title: "Scene 1,\xa0 Shot 4,\xa0 Take 1",
		clipcolor: "#E27000",
		subtitle1:
			"C005_12060348_C001 \xa0 \xa0 14:01:12:00 \xa0 \xa0 06 Dec 2019 \xa0 \xa0 Cam C",
		subtitle2:
			"3840 x 2160 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 01:01:05:23",
		meta: true,
	},
	{
		header: false,
		thumb: "interview-02",
		title: "Scene 1,\xa0 Shot 2,\xa0 Take 1",
		clipcolor: "#E27000",
		subtitle1:
			"B021_10031331_C001 \xa0 \xa0 12:29:10:01 \xa0 \xa0 06 Dec 2019 \xa0 \xa0 Cam B",
		subtitle2:
			"3840 x 2160 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 01:02:15:02",
	},
	{
		header: false,
		thumb: "interview-03",
		title: "Scene 1,\xa0 Shot 3,\xa0 Take 1",
		clipcolor: "#00537B",
		subtitle1:
			"B021_10031347_C002 \xa0 \xa0 13:11:09:16 \xa0 \xa0 06 Dec 2019 \xa0 \xa0 Cam B",
		subtitle2:
			"3840 x 2160 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:36:24:02",
	},
	{
		header: "Scene 2",
		stickyBottom: true,
		identifier: "scenesticky1",
		thumb: "interview-09",
		title: "Scene 2,\xa0 Shot 1,\xa0 Take 1 ",
		clipcolor: "#E27000",
		subtitle1:
			"A001_10041406_C025 \xa0 \xa0 09:15:23:15 \xa0 \xa0 07 Dec 2019 \xa0 \xa0 Cam A",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 48 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:19:42:08",
	},
	{
		header: false,
		thumb: "interview-07",
		title: "Scene 2,\xa0 Shot 2,\xa0 Take 1",
		clipcolor: "#00537B",
		subtitle1:
			"A001_10041323_C007 \xa0 \xa0 09:21:59:06 \xa0 \xa0 07 Dec 2019 \xa0 \xa0 Cam A",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 48 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:36:24:02",
	},
	{
		header: "Scene 3",
		stickyBottom: true,
		identifier: "scenesticky2",
		thumb: "interview-04",
		title: "Scene 3,\xa0 Shot 2,\xa0 Take 1",
		clipcolor: "#009B9A",
		subtitle1:
			"A004_12070413_C065 \xa0 \xa0 10:14:11:00 \xa0 \xa0 07 Dec 2019 \xa0 \xa0 Cam A",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:36:24:02",
	},
	{
		header: false,
		thumb: "interview-06",
		title: "Scene 3,\xa0 Shot 1,\xa0 Take 2",
		clipcolor: "#F886B7",
		subtitle1:
			"A004_12070313_C030 \xa0 \xa0 11:02:22:02 \xa0 \xa0 07 Dec 2019 \xa0 \xa0 Cam A",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:18:41:00",
	},
];

export const colorSorting = [
	{
		header: "Orange",
		thumb: "interview-01",
		title: "A001_10031254_c001,\xa0 06 Dec 2019",
		clipcolor: "#E27000",
		subtitle1:
			"12:24:59:06 \xa0 \xa0 Cam A \xa0 \xa0 Scene 1 \xa0 \xa0 Shot 1 \xa0 \xa0 Take 1",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:53:17:12",
	},
	{
		header: false,
		thumb: "interview-09",
		title: "A001_10041406_C025,\xa0 07 Dec 2019",
		clipcolor: "#E27000",
		subtitle1:
			"09:15:23:15 \xa0 \xa0 Cam A \xa0 \xa0 Scene 2 \xa0 \xa0 Shot 1 \xa0 \xa0 Take 1",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 48 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:19:42:08",
	},
	{
		header: false,
		thumb: "interview-02",
		stickyBottom: true,
		identifier: "clipnamesticky1",
		title: "B021_10031331_C001,\xa0 06 Dec 2019",
		clipcolor: "#E27000",
		subtitle1:
			"12:29:10:01 \xa0 \xa0 Cam B \xa0 \xa0 Scene 1 \xa0 \xa0 Shot 2 \xa0 \xa0 Take 1",
		subtitle2:
			"3840 x 2160 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 01:02:15:02",
	},
	{
		header: false,
		thumb: "interview-05",
		title: "C005_12060348_C001,\xa0 06 Dec 2019",
		clipcolor: "#E27000",
		subtitle1:
			"14:01:12:00 \xa0 \xa0 Cam C \xa0 \xa0 Scene 1 \xa0 \xa0 Shot 4 \xa0 \xa0 Take 1",
		subtitle2:
			"3840 x 2160 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 01:01:05:23",
		meta: true,
	},
	{
		header: "Navy",
		stickyBottom: true,
		identifier: "clipColorsticky1",
		thumb: "interview-07",
		title: "A001_10041323_C007,\xa0 07 Dec 2019",
		clipcolor: "#00537B",
		subtitle1:
			"09:21:59:06 \xa0 \xa0 Cam A \xa0 \xa0 Scene 2 \xa0 \xa0 Shot 2 \xa0 \xa0 Take 1",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 48 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:36:24:02",
	},
	{
		header: false,
		thumb: "interview-03",
		title: "B021_10031347_C002,\xa0 06 Dec 2019",
		clipcolor: "#00537B",
		subtitle1:
			"13:11:09:16 \xa0 \xa0 Cam B \xa0 \xa0 Scene 1 \xa0 \xa0 Shot 3 \xa0 \xa0 Take 1",
		subtitle2:
			"3840 x 2160 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:36:24:02",
	},
	{
		header: "Teal",
		stickyBottom: true,
		identifier: "clipColorsticky2",
		thumb: "interview-04",
		title: "A004_12070413_C065,\xa0 07 Dec 2019",
		clipcolor: "#009B9A",
		subtitle1:
			"10:14:11:00 \xa0 \xa0 Cam A \xa0 \xa0 Scene 3 \xa0 \xa0 Shot 2 \xa0 \xa0 Take 1",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:36:24:02",
	},
	{
		header: "Pink",
		stickyBottom: true,
		identifier: "clipColorsticky3",
		thumb: "interview-06",
		title: "A004_12070313_C030,\xa0 07 Dec 2019",
		clipcolor: "#F886B7",
		subtitle1:
			"11:02:22:02 \xa0 \xa0 Cam A \xa0 \xa0 Scene 3 \xa0 \xa0 Shot 1 \xa0 \xa0 Take 2",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:18:41:00",
	},
	{
		header: "Lime",
		stickyBottom: true,
		identifier: "clipColorsticky4",
		thumb: "interview-08",
		title: "C002_10031254_c001,\xa0 06 Dec 2019",
		clipcolor: "#A3C800",
		subtitle1:
			"12:26:32:06 \xa0 \xa0 Cam C \xa0 \xa0 Scene 1 \xa0 \xa0 Shot 1 \xa0 \xa0 Take 2",
		subtitle2:
			"3840 x 2160 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:24:12:09",
		meta: true,
	},
];

export const keyWordsSorting = [
	{
		header: "Office",
		thumb: "interview-09",
		title: "A001_10041406_C025,\xa0 07 Dec 2019",
		clipcolor: "#E27000",
		subtitle1:
			"09:15:23:15 \xa0 \xa0 Cam A \xa0 \xa0 Scene 2 \xa0 \xa0 Shot 1 \xa0 \xa0 Take 1",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 48 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:19:42:08",
	},
	{
		header: false,
		thumb: "interview-07",
		title: "A001_10041323_C007,\xa0 07 Dec 2019",
		clipcolor: "#00537B",
		subtitle1:
			"09:21:59:06 \xa0 \xa0 Cam A \xa0 \xa0 Scene 2 \xa0 \xa0 Shot 2 \xa0 \xa0 Take 1",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 48 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:36:24:02",
	},
	{
		header: "Interview",
		thumb: "interview-01",
		stickyBottom: true,
		identifier: "keyWordSticky1",
		title: "A001_10031254_c001,\xa0 06 Dec 2019",
		clipcolor: "#E27000",
		subtitle1:
			"12:24:59:06 \xa0 \xa0 Cam A \xa0 \xa0 Scene 1 \xa0 \xa0 Shot 1 \xa0 \xa0 Take 1",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:53:17:12",
	},
	{
		header: false,
		thumb: "interview-02",
		title: "B021_10031331_C001,\xa0 06 Dec 2019",
		clipcolor: "#E27000",
		subtitle1:
			"12:29:10:01 \xa0 \xa0 Cam B \xa0 \xa0 Scene 1 \xa0 \xa0 Shot 2 \xa0 \xa0 Take 1",
		subtitle2:
			"3840 x 2160 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 01:02:15:02",
	},
	{
		header: false,
		thumb: "interview-03",
		title: "B021_10031347_C002,\xa0 06 Dec 2019",
		clipcolor: "#00537B",
		subtitle1:
			"13:11:09:16 \xa0 \xa0 Cam B \xa0 \xa0 Scene 1 \xa0 \xa0 Shot 3 \xa0 \xa0 Take 1",
		subtitle2:
			"3840 x 2160 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:36:24:02",
	},
	{
		header: false,
		thumb: "interview-08",
		title: "C002_10031254_C001,\xa0 06 Dec 2019",
		clipcolor: "#A3C800",
		subtitle1:
			"12:26:32:06 \xa0 \xa0 Cam C \xa0 \xa0 Scene 1 \xa0 \xa0 Shot 1 \xa0 \xa0 Take 2",
		subtitle2:
			"3840 x 2160 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:24:12:09",
		meta: true,
	},
	{
		header: "Lab",
		stickyBottom: true,
		identifier: "keyWordSticky2",
		thumb: "interview-04",
		title: "A004_12070413_C065,\xa0 07 Dec 2019",
		clipcolor: "#009B9A",
		subtitle1:
			"10:14:11:00 \xa0 \xa0 Cam A \xa0 \xa0 Scene 3 \xa0 \xa0 Shot 2 \xa0 \xa0 Take 1",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:36:24:02",
	},
	{
		header: false,
		thumb: "interview-06",
		title: "A004_12070313_C030,\xa0 07 Dec 2019",
		clipcolor: "#F886B7",
		subtitle1:
			"11:02:22:02 \xa0 \xa0 Cam A \xa0 \xa0 Scene 3 \xa0 \xa0 Shot 1 \xa0 \xa0 Take 2",
		subtitle2:
			"5744 x 3024 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 00:18:41:00",
	},
	{
		header: "Unsorted",
		stickyBottom: true,
		identifier: "keyWordSticky3",
		thumb: "interview-05",
		title: "C005_12060348_C001,\xa0 06 Dec 2019",
		clipcolor: "#E27000",
		subtitle1:
			"14:01:12:00 \xa0 \xa0 Cam C \xa0 \xa0 Scene 1 \xa0 \xa0 Shot 4 \xa0 \xa0 Take 1",
		subtitle2:
			"3840 x 2160 \xa0 \xa0 24 fps \xa0 \xa0 2 Ch \xa0 \xa0 01:01:05:23",
		meta: true,
	},
];
