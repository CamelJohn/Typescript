enum Bundler {
    Webpack = 'Webpack',
    esBuild = 'esBuild',
    Parcel = 'Parcel',
    Rollup = 'Rollup'
}

function defineBundler(bundler: Bundler) {
    switch (bundler) {
        case Bundler.esBuild: return false;
        case Bundler.Webpack: 
        case Bundler.Parcel: 
        case Bundler.Rollup: return true;
        default: return false;
    } 
}

enum Ages {
    young = 10,
    adolescent = 15,
    mature = 18,
    man = 30,
    wise = 50
}

