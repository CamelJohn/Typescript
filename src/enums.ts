enum Bundler {
    Webpack = 'Webpack',
    esBuild = 'esBuild',
    Parcel = 'Parcel',
    Rollup = 'Rollup'
}

type BundlerType = keyof typeof Bundler;

function defineBundler(bundler: BundlerType) {
    switch (bundler) {
        case Bundler.esBuild: return false;
        case Bundler.Webpack: 
        case Bundler.Parcel: 
        case Bundler.Rollup: return true;
        default: return false;
    } 
}

defineBundler('esBuild')

enum Ages {
    young = 10,
    adolescent = 15,
    mature = 18,
    man = 30,
    wise = 50
}

enum Mixed {
    age = 35,
    name = 'John'
}

