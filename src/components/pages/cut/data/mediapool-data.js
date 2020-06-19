
export const clipsMediaPool = [
	{ id: 0, clipname: 'Timeline 1' },
	{ id: 1, clipname: 'GamePlay_1' },
	{ id: 2, clipname: 'GamePlay_2' },
	{ id: 3, clipname: 'GamePlay_3' },
	{ id: 4, clipname: 'GamePlay_4' },
	{ id: 5, clipname: 'GamePlay_5' },
	{ id: 6, clipname: 'GamePlay_6' },
	{ id: 7, clipname: 'GamePlay_7' },
	{ id: 8, clipname: 'GamePlay_8' },
	{ id: 9, clipname: 'GamePlay_9' },
	{ id: 10, clipname: 'GamePlay_10' },
	{ id: 11, clipname: 'GamePlay_11' },
	{ id: 12, clipname: 'GamePlay_12' },
	{ id: 13, clipname: 'GamePlay_13' },
	{ id: 14, clipname: 'GamePlay_14' },
	{ id: 15, clipname: 'GamePlay_15' },
	{ id: 16, clipname: 'GamePlay_16' },
	{ id: 17, clipname: 'GamePlay_17' },
	{ id: 18, clipname: 'GamePlay_18' },
	{ id: 19, clipname: 'GamePlay_19' },
	{ id: 20, clipname: 'GamePlay_20' },
	{ id: 21, clipname: 'GamePlay_21' },
	{ id: 22, clipname: 'GamePlay_22' },
	{ id: 23, clipname: 'GamePlay_23' },
	{ id: 24, clipname: 'GamePlay_24' },
	{ id: 25, clipname: 'GamePlay_25' },
];

export const cameraSource = [
	{ id: 0, label: 'FaceTime HD Camera' },
	{ id: 1, label: 'Blackmagic Design' },
	{ id: 2, label: 'Blackmagic UltraStudio Mini' }
];

export const audioSource = [
	{ id: 0, label: 'Internal Microphone' },
	{ id: 1, label: 'RODE IA' },
	{ id: 2, label: 'Blackmagic Design' },
	{ id: 3, label: 'Mute Audio' }
];

export const colorPickerType = [
	{ id: 0, classe: 'picker-solid' },
	{ id: 1, classe: 'picker-gradient' },
	{ id: 2, classe: 'picker-radial' },
	{ id: 3, classe: 'shapes' },
];

export const solidColorList = [
	{ id: 0, color: '#FFF' },
	{ id: 1, color: '#F4C10E' },
	{ id: 2, color: '#0EF40E' },
	{ id: 3, color: '#2037FB' },
	{ id: 4, color: '#780EF4' },
	{ id: 5, color: '#F40EC0' },
	{ id: 6, color: '#F4310E' },
	{ id: 7, color: '#F4550E' },
	{ id: 8, color: '#B6FEBD' },
	{ id: 9, color: '#B6E5FE' },
	{ id: 10, color: '#E8B6FE' },
	{ id: 11, color: '#FEB6ED' },
	{ id: 12, color: '#FEB6B6' },
	{ id: 13, color: '#FEDBB6' },
	{ id: 14, color: '#FEF8B6' },
	{ id: 15, color: '#757575' },
	{ id: 16, color: '#272727' },
	{ id: 17, color: '#000000' },
	{ id: 18, color: '#9F5E25' },
	{ id: 19, color: '#563212' },
	{ id: 20, color: '#231102' },
];

export const shapeList = [
	{ id: 1, classe: '' },
	{ id: 2, classe: '' },
	{ id: 3, classe: '' },
	{ id: 4, classe: '' },
	{ id: 5, classe: '' },
	{ id: 6, classe: '' },
	{ id: 7, classe: '' },
];

export const sortMenu = [
	{ id: 0, label: 'Timecode', 	css: 'timecode' },
	{ id: 1, label: 'Camera', 		css: 'camera' },
	{ id: 2, label: 'Date Time',	css: 'duration' },
	{ id: 3, label: 'Clip Name', 	css: 'name' },
	{ id: 4, label: '', 			css: '' },
	{ id: 5, label: 'Scene / Shot', css: 'clapper' },
	{ id: 6, label: 'Clip Color', 	css: 'color' },
	{ id: 7, label: 'Clips Used', 	css: 'date-added' },
	{ id: 8, label: 'Keywords', 	css: 'date-added' },
	{ id: 9, label: '', 			css: '' },
];

export const sortMenuOrder = [
	{ id: 0, label: 'Ascending Order' },
	{ id: 1, label: 'Descending Order' },
	{ id: 2, label: '', css: '' },
	{ id: 3, label: 'Display flat view bins' },
	{ id: 4, label: 'Show only good takes' }
];

export const timeCodeList = [
	{
		header: '00:09:00:00',
		content: [
			{
				thumb: 'interview-09',
				title: '09:15:23:15 / 07 12 2019 / Camera A',
				clipcolor: '#E27000',
				subtitle1: 'A001_10041406_C025',
				span1_1: 'Scene 1',
				span1_2: 'Shot 1',
				span1_3: 'Take 2',
				subtitle2: '5744 x 3024',
				span2_1: '48 fps',
				span2_2: '2 Ch',
				span2_3: '00:19:42:08'
			},
			{
				thumb: 'interview-07',
				title: '09:21:59:06 / 07 12 2019 / Camera A',
				clipcolor: '#00537B',
				subtitle1: 'A001_10041323_C007',
				span1_1: 'Scene 1',
				span1_2: 'Shot 1',
				span1_3: 'Take 2',
				subtitle2: '5744 x 3024',
				span2_1: '48 fps',
				span2_2: '2 Ch',
				span2_3: '00:36:24:02'
			}
		]
	},
	{
		header: '00:10:00:00',
		content: [
			{
				thumb: 'interview-04',
				title: '10:14:11:00 / 07 12 2019 / Camera A',
				clipcolor: '#009B9A',
				subtitle1: 'A004_12070413_C065',
				span1_1: 'Scene 3',
				span1_2: 'Shot 2',
				span1_3: 'Take 1',
				subtitle2: '5744 x 3024',
				span2_1: '24 fps',
				span2_2: '2 Ch',
				span2_3: '00:36:24:02'
			}
		]
	},
	{
		header: '00:11:00:00',
		content: [
			{
				thumb: 'interview-06',
				title: '11:02:22:02 / 07 12 2019 / Camera A',
				clipcolor: '#F886B7',
				subtitle1: 'A004_12070313_C030',
				span1_1: 'Scene 3',
				span1_2: 'Shot 1',
				span1_3: 'Take 2',
				subtitle2: '5744 x 3024',
				span2_1: '24 fps',
				span2_2: '2 Ch',
				span2_3: '00:18:41:00'
			}
		]
	},
	{
		header: '00:12:00:00',
		content: [
			{
				thumb: 'interview-01',
				title: '12:24:59:06 / 06 12 2019 / Camera A',
				clipcolor: '#E27000',
				subtitle1: 'A001_10031254_c001',
				span1_1: 'Scene 1',
				span1_2: 'Shot 1',
				span1_3: 'Take 1',
				subtitle2: '5744 x 3024',
				span2_1: '24 fps',
				span2_2: '2 Ch',
				span2_3: '00:53:17:12'
			},
			{
				thumb: 'interview-08',
				title: '12:26:32:06 / 06 12 2019 / Camera C',
				clipcolor: '#A3C800',
				subtitle1: 'A001_12060348_C001',
				span1_1: 'Scene 1',
				span1_2: 'Shot 1',
				span1_3: 'Take 2',
				subtitle2: '3840 x 2160',
				span2_1: '24 fps',
				span2_2: '2 Ch',
				span2_3: '00:24:12:09',
				meta: true,
			},
			{
				thumb: 'interview-02',
				title: '12:29:10:01 / 06 12 2019 / Camera B',
				clipcolor: '#E27000',
				subtitle1: 'B021_10031331_C001',
				span1_1: 'Scene 1',
				span1_2: 'Shot 2',
				span1_3: 'Take 1',
				subtitle2: '3840 x 2160',
				span2_1: '24 fps',
				span2_2: '2 Ch',
				span2_3: '01:02:15:02'
			}
		]
	},
	{
		header: '00:13:00:00',
		content: [
			{
				thumb: 'interview-03',
				title: '13:11:09:16 / 06 12 2019 / Camera B',
				clipcolor: '#00537B',
				subtitle1: 'B021_10031347_C002',
				span1_1: 'Scene 1',
				span1_2: 'Shot 3',
				span1_3: 'Take 1',
				subtitle2: '3840 x 2160',
				span2_1: '24 fps',
				span2_2: '2 Ch',
				span2_3: '00:36:24:02'
			}
		]
	},
	{
		header: '00:14:00:00',
		content: [
			{
				thumb: 'interview-05',
				title: '14:01:12:00 / 06 12 2019 / Camera C',
				clipcolor: '#E27000',
				subtitle1: 'A001_10031254_c001',
				span1_1: 'Scene 1',
				span1_2: 'Shot 4',
				span1_3: 'Take 1',
				subtitle2: '3840 x 2160',
				span2_1: '24 fps',
				span2_2: '2 Ch',
				span2_3: '01:01:05:23',
				meta: true
			}
		]
	},
]

export const cameraSorting = [
	{
		header: 'Camera A',
		content: [
			{
				thumb: 'interview-01',
				title: 'Camera A / 06 12 2019 / 12:24:59:06',
				clipcolor: '#E27000',
				subtitle1: 'A001_10031254_c001',
				span1_1: 'Scene 1',
				span1_2: 'Shot 1',
				span1_3: 'Take 1',
				subtitle2: '5744 x 3024',
				span2_1: '24 fps',
				span2_2: '2 Ch',
				span2_3: '00:53:17:12'
			},
			{
				thumb: 'interview-09',
				title: 'Camera A / 07 12 2019 / 09:15:23:15',
				clipcolor: '#E27000',
				subtitle1: 'A001_10041406_C025',
				span1_1: 'Scene 1',
				span1_2: 'Shot 1',
				span1_3: 'Take 2',
				subtitle2: '5744 x 3024',
				span2_1: '48 fps',
				span2_2: '2 Ch',
				span2_3: '00:19:42:08'
			},
			{
				thumb: 'interview-07',
				title: 'Camera A / 07 12 2019 / 09:21:59:06',
				clipcolor: '#00537B',
				subtitle1: 'A001_10041323_C007',
				span1_1: 'Scene 1',
				span1_2: 'Shot 1',
				span1_3: 'Take 2',
				subtitle2: '5744 x 3024',
				span2_1: '48 fps',
				span2_2: '2 Ch',
				span2_3: '00:36:24:02'
			},
			{
				thumb: 'interview-04',
				title: 'Camera A / 07 12 2019 / 10:14:11:00',
				clipcolor: '#009B9A',
				subtitle1: 'A004_12070413_C065',
				span1_1: 'Scene 3',
				span1_2: 'Shot 2',
				span1_3: 'Take 1',
				subtitle2: '5744 x 3024',
				span2_1: '24 fps',
				span2_2: '2 Ch',
				span2_3: '00:36:24:02'
			},
			{
				thumb: 'interview-06',
				title: 'Camera A / 07 12 2019 / 11:02:22:02',
				clipcolor: '#F886B7',
				subtitle1: 'A004_12070313_C030',
				span1_1: 'Scene 3',
				span1_2: 'Shot 1',
				span1_3: 'Take 2',
				subtitle2: '5744 x 3024',
				span2_1: '24 fps',
				span2_2: '2 Ch',
				span2_3: '00:18:41:00'
			}
		]
	},
	{
		header: 'Camera B',
		content: [
			{
				thumb: 'interview-02',
				title: 'Camera B / 06 12 2019 / 12:29:10:01',
				clipcolor: '#E27000',
				subtitle1: 'B021_10031331_C001',
				span1_1: 'Scene 1',
				span1_2: 'Shot 2',
				span1_3: 'Take 1',
				subtitle2: '3840 x 2160',
				span2_1: '24 fps',
				span2_2: '2 Ch',
				span2_3: '01:02:15:02'
			},
			{
				thumb: 'interview-03',
				title: 'Camera B / 06 12 2019 / 13:11:09:16',
				clipcolor: '#00537B',
				subtitle1: 'B021_10031347_C002',
				span1_1: 'Scene 1',
				span1_2: 'Shot 3',
				span1_3: 'Take 1',
				subtitle2: '3840 x 2160',
				span2_1: '24 fps',
				span2_2: '2 Ch',
				span2_3: '00:36:24:02'
			}
		]
	},
	{
		header: 'Camera C',
		content: [
			{
				thumb: 'interview-08',
				title: 'Camera C / 06 12 2019 / 12:26:32:06',
				clipcolor: '#A3C800',
				subtitle1: 'A001_12060348_C001',
				span1_1: 'Scene 1',
				span1_2: 'Shot 1',
				span1_3: 'Take 2',
				subtitle2: '3840 x 2160',
				span2_1: '24 fps',
				span2_2: '2 Ch',
				span2_3: '00:24:12:09',
				meta: true
			},
			{
				thumb: 'interview-05',
				title: 'Camera C / 06 12 2019 / 14:01:12:00',
				clipcolor: '#E27000',
				subtitle1: 'A001_10031254_c001',
				span1_1: 'Scene 1',
				span1_2: 'Shot 4',
				span1_3: 'Take 1',
				subtitle2: '3840 x 2160',
				span2_1: '24 fps',
				span2_2: '2 Ch',
				span2_3: '01:01:05:23',
				meta: true
			}
		]
	}
]

export const dateTimeSorting = [
	{
		header: 'December',
		content: [
			{
				thumb: 'interview-01',
				title: '06 12 2019 / 12:24:59:06',
				clipcolor: '#E27000',
				subtitle1: 'A001_10031254_c001',
				span1_1: 'Cam A',
				span1_2: 'Scene 1',
				span1_3: 'Shot 1',
				span1_4: 'Take 1',
				subtitle2: '5744 x 3024',
				span2_1: '24 fps',
				span2_2: '2 Ch',
				span2_3: '00:53:17:12'
			},
			{
				thumb: 'interview-08',
				title: '06 12 2019 / 12:26:32:06',
				clipcolor: '#A3C800',
				subtitle1: 'A001_12060348_C001',
				span1_1: 'Cam C',
				span1_2: 'Scene 1',
				span1_3: 'Shot 1',
				span1_4: 'Take 2',
				subtitle2: '3840 x 2160',
				span2_1: '24 fps',
				span2_2: '2 Ch',
				span2_3: '00:24:12:09',
				meta: true
			},
			{
				thumb: 'interview-02',
				title: '06 12 2019 / 12:29:10:01',
				clipcolor: '#E27000',
				subtitle1: 'B021_10031331_C001',
				span1_1: 'Cam B',
				span1_2: 'Scene 1',
				span1_3: 'Shot 2',
				span1_4: 'Take 1',
				subtitle2: '3840 x 2160',
				span2_1: '24 fps',
				span2_2: '2 Ch',
				span2_3: '01:02:15:02'
			},
			{
				thumb: 'interview-03',
				title: '06 12 2019 / 13:11:09:16',
				clipcolor: '#00537B',
				subtitle1: 'B021_10031347_C002',
				span1_1: 'Cam B',
				span1_2: 'Scene 1',
				span1_3: 'Shot 3',
				span1_4: 'Take 1',
				subtitle2: '3840 x 2160',
				span2_1: '24 fps',
				span2_2: '2 Ch',
				span2_3: '00:36:24:02'
			},
			{
				thumb: 'interview-05',
				title: '06 12 2019 / 14:01:12:00',
				clipcolor: '#E27000',
				subtitle1: 'A001_10031254_c001',
				span1_1: 'Cam C',
				span1_2: 'Scene 1',
				span1_3: 'Shot 4',
				span1_4: 'Take 1',
				subtitle2: '3840 x 2160',
				span2_1: '24 fps',
				span2_2: '2 Ch',
				span2_3: '01:01:05:23',
				meta: true
			},
			{
				thumb: 'interview-09',
				title: '07 12 2019 / 09:15:23:15',
				clipcolor: '#E27000',
				subtitle1: 'A001_10041406_C025',
				span1_1: 'Cam A',
				span1_2: 'Scene 1',
				span1_3: 'Shot 1',
				span1_4: 'Take 2',
				subtitle2: '5744 x 3024',
				span2_1: '48 fps',
				span2_2: '2 Ch',
				span2_3: '00:19:42:08'
			},
			{
				thumb: 'interview-07',
				title: '07 12 2019 / 09:21:59:06',
				clipcolor: '#00537B',
				subtitle1: 'A001_10041323_C007',
				span1_1: 'Cam A',
				span1_2: 'Scene 1',
				span1_3: 'Shot 1',
				span1_4: 'Take 2',
				subtitle2: '5744 x 3024',
				span2_1: '48 fps',
				span2_2: '2 Ch',
				span2_3: '00:36:24:02'
			},
			{
				thumb: 'interview-04',
				title: '07 12 2019 / 10:14:11:00',
				clipcolor: '#009B9A',
				subtitle1: 'A004_12070413_C065',
				span1_1: 'Cam A',
				span1_2: 'Scene 3',
				span1_3: 'Shot 2',
				span1_4: 'Take 1',
				subtitle2: '5744 x 3024',
				span2_1: '24 fps',
				span2_2: '2 Ch',
				span2_3: '00:36:24:02'
			},
			{
				thumb: 'interview-06',
				title: '07 12 2019 / 11:02:22:02',
				clipcolor: '#F886B7',
				subtitle1: 'A004_12070313_C030',
				span1_1: 'Cam A',
				span1_2: 'Scene 3',
				span1_3: 'Shot 1',
				span1_4: 'Take 2',
				subtitle2: '5744 x 3024',
				span2_1: '24 fps',
				span2_2: '2 Ch',
				span2_3: '00:18:41:00'
			}
		]
	}
]
