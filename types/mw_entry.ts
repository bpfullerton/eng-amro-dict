export interface MWEntry {
    meta:{  
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
            sound:{  
                audio: string;
                ref: string;
                stat: string;
            };
        }[];
    };
    fl?: string;
    def?:
        {
            sseq: [
                [  
                    string,
                    {  
                        sn: string;
                        dt: [[string, string], [string, {t: string}[]]][];
                        sdsense?: {  
                            sd?: string;
                            dt?: [[string, string], [string, {t: string}[]]][];
                        };
                    }
                ]
            ][];
        }[];
    uros?:  
        {  
            ure?: string;
            fl?: string;
        }[];
    et?: [string, string][];
    date?: string;
    ld_link?: {  
        link_hw: string;
        link_fl: string;
    };
    suppl?: {  
        examples?: { t: string }[];
        ldq?: {
            ldhw?: string;
            fl?: string;
            def?: {
                sls?: string[];
                sseq?: [
                    [  
                        string,
                        {  
                            sn?: string;
                            sls?: string[];
                            dt?: [[string, string], [string, {t: string}[]]][];
                            sdsense?: {  
                                sd?: string;
                                dt?: [[string, string], [string, {t: string}[]]][];
                            };
                        }
                    ]
                ][];
            }[];
        }
    };
    shortdef: string[];
}