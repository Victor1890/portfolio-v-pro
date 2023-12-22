import { ICertificate } from '@interfaces/common/common.interface'
import { generateUUID } from '@utils/string.util'

const certificatesData: ICertificate[] = [
	{
		id: generateUUID(),
		orgLogo:
			'https://media.licdn.com/dms/image/D4E0BAQEaJ7yKnkdypQ/company-logo_100_100/0/1688147344998/redisinc_logo?e=1710979200&v=beta&t=nUkfsiEamMM5C69FLDVwrW9833vRIRYHwL0XrQOf9-0',
		orgName: 'Redis University',
		url: 'https://university.redis.com/certificates/91e7a8aa3fad4376a02466cea6ac00ee',
		title: 'Redis | RU101: Introduction to Redis Data Structures',
		issuedDate: 'Feb 23',
		pinned: true,
	},
	{
		id: generateUUID(),
		orgLogo:
			'https://media.licdn.com/dms/image/C4E0BAQGLKj3JHcof0w/company-logo_100_100/0/1630639684997/free_code_camp_logo?e=1710979200&v=beta&t=Co7LHmlRW8wvTupZnF1oZe4Z_8JereDFnIE1ekqOKPQ',
		orgName: 'FreeCodeCamp',
		url: 'https://www.freecodecamp.org/certification/fcce106f294-62b3-48b5-8260-94d69f815665/back-end-development-and-apis',
		title: 'Back End Development and APIs',
		issuedDate: 'Dec 22',
		pinned: true,
	},
	{
		id: generateUUID(),
		orgLogo:
			'https://media.licdn.com/dms/image/C4E0BAQGLKj3JHcof0w/company-logo_100_100/0/1630639684997/free_code_camp_logo?e=1710979200&v=beta&t=Co7LHmlRW8wvTupZnF1oZe4Z_8JereDFnIE1ekqOKPQ',
		orgName: 'FreeCodeCamp',
		url: 'https://www.freecodecamp.org/certification/fcce106f294-62b3-48b5-8260-94d69f815665/javascript-algorithms-and-data-structures',
		title: 'JavaScript Algorithms and Data Structures',
		issuedDate: 'Dec 22',
		pinned: true,
	},
	{
		id: generateUUID(),
		orgLogo:
			'https://media.licdn.com/dms/image/C560BAQFLY-T8cCOlvQ/company-logo_100_100/0/1631336154182?e=1710979200&v=beta&t=Z2KAQWpJyXlcOCkQROAib6oQSjxO2OR_DzYXchMeyVE',
		orgName: 'PCSD, Parque Cibernético de Santo Domingo',
		title: 'PCSD Certified AR & VR Developer Lever 1',
		issuedDate: 'Dec 20',
		pinned: true,
	},
	{
		id: generateUUID(),
		orgLogo:
			'https://media.licdn.com/dms/image/C4E0BAQFgocdTGHthDA/company-logo_100_100/0/1630604808565/cisco_networking_academy1_logo?e=1710979200&v=beta&t=9IkqmXhTnm_VoX1tJbT74OCWUZIwRWKJybKIooO1coo',
		orgName: 'Cisco Networking Academy',
		title: 'IT Essentials',
		issuedDate: 'Dec 20',
		pinned: true,
	},
	{
		id: generateUUID(),
		orgLogo:
			'https://media.licdn.com/dms/image/C4E0BAQFm04bZsiHGBg/company-logo_100_100/0/1630570453579/sdq_training_center_logo?e=1710979200&v=beta&t=AGjCX8P2W2a6q44moXQ5SKaIoJit49FqhwW0kKzO38Q',
		orgName: 'SDQ Training Center',
		title: 'Dynamic Web',
		issuedDate: 'Sep 18',
		pinned: true,
	},
	{
		id: generateUUID(),
		orgLogo:
			'https://media.licdn.com/dms/image/C4E0BAQHan1BjsIksMw/company-logo_100_100/0/1677764179873/unibe_logo?e=1710979200&v=beta&t=PO6MJXXqLdhvtvqpkABDpuSXn2fhVBInNC0ZX8OlpkI',
		orgName: 'Iberoamerican University',
		title: 'Competitive Workshop on Social Entrepreneurship',
		issuedDate: 'Mar 18',
		pinned: true,
	},
]

export default certificatesData
