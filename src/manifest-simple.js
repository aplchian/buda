const data = {
    'for-volume': 'bdr:I1KG9128',
    'spec-version': '0.1.0',
    status: 'released',
    'volume-label': [
        {'@value': 'the label of the volume', '@language': 'bo'},
    ],
    rev: '860f508e-608e-484d-9fc3-62392fab0b12',
    attribution: [{'@value': 'data contributed by rKTs', '@language': 'en'}],
    note: [
        {'@value': 'not sure about the order of page 2', '@language': 'en'},
    ],
    'viewing-direction': 'left-to-right',
    changes: [
        {
            time: '2020-02-03T11:35:30.00Z',
            user: 'bdr:U0002',
            message: {'@value': 'initial version', '@language': 'en'},
        },
    ],
    pagination: [
        {
            id: 'pgfolios',
            type: 'folios',
            note: [
                {'@value': 'from the original blockprint', '@language': 'en'},
            ],
        },
        {
            id: 'bates',
            type: 'simple',
            note: [
                {
                    '@value': 'bates numbers added on the xerox reprint',
                    '@language': 'en',
                },
            ],
        },
    ],
    sections: [
        {
            id: 'intro',
            name: {'@value': 'intro', '@language': 'en'},
        },
        {
            id: 's1',
            name: {'@value': 'section1', '@language': 'bo-x-ewts'},
        },
        {
            id: 's2',
            name: {'@value': 'section2', '@language': 'bo-x-ewts'},
        },
    ],
    'default-view': 'view1',
    view: {
        view1: {
            imagelist: [
                {
                    filename: 'I1KG9128001.tif',
                    pagination: {pgfolios: {value: '1a', section: 'intro'}},
                    note: [
                        {
                            '@value':
                                'this is an intro page, some editions would have that before the scans',
                            '@language': 'en',
                        },
                    ],
                },
                {
                    filename: 'I1KG9128002.tif',
                    pagination: {pgfolios: {value: '1a', section: 'intro'}},
                    indication: {'@value': 'kha', '@language': 'bo-x-ewts'},
                    tags: ['T0021', 'T0011'],
                },
                {
                    pagination: {pgfolios: {value: '1a'}},
                    tags: ['T0020'],
                },
                {
                    filename: 'I1KG9128003.tif',
                    pagination: {
                        pgfolios: {value: '1b', section: 'intro'},
                        bates: {value: '2'},
                    },
                },
                {
                    filename: 'I1KG9128005.tif',
                    display: false,
                    tags: ['T0018'],
                    'duplicate-of': 'I1KG9128004.tif',
                },
                {
                    filename: 'I1KG9128004.tif',
                    pagination: {
                        pgfolios: {value: "1'a", section: 'intro'},
                    },
                    rotation: 180,
                },
            ],
        },
    },
    appData: {
        bvmt: {
            'metadata-for-bvmt-ver': '0.1.0',
            'default-vol-string-lang': 'bo',
            'show-checked-images': true,
            'show-hidden-images': true,
            'margin-indication-odd': '{volname}-{sectionname}-{pagenum:bo}',
            'margin-indication-even': '',
        },
    },
};

export default data
