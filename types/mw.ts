export interface MWAPIResponse {
    meta: {
        id: string;
        uuid: string;
        sort?: string;
        src?: string;
        section?: string;
        stems?: string[];
        offensive?: boolean;
    };
    hwi: {
        hw: string;
        prs?: {
            mw: string;
            sound?: {
                audio: string;
                ref?: string;
                stat?: string;
            };
        }[];
    };
    fl?: string;
    ins?: {
        il?: string;
        if?: string;
    }[];
    def?: {
        sseq: [
            [
                string,
                {
                    dt: [
                        [string, string],
                        [string, { t: string }[]]
                    ];
                    sdsense?: {
                        sd?: string;
                        dt?: [
                            [string, string],
                            [string, { t: string }[]]
                        ];
                    };
                }
            ]
        ];
    }[];
    cxs?: {
        cxl: string;
        cxtis: {
            cxt: string;
        }[];
    }[];
    quotes?: {
        t: string;
        aq?: {
            auth?: string;
            source?: string;
            aqdate?: string;
        };
    }[];
    et?: [string, string][];
    date?: string;
    shortdef: string[];
}
