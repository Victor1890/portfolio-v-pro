export type ITableOfContentMDX = {
    level: number;
    id: string;
    heading: string;
};

export interface ICertificate {
    id: string;
    title: string;
    issuedDate: string;
    orgName: string;
    orgLogo: string;
    url?: string;
    pinned: boolean;
};
