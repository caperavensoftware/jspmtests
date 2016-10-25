export function configure(aurelia) {
    return new Promise((resolve) => {
        aurelia.use
            .standardConfiguration()
            .developmentLogging()
            .plugin("pragma-tabsheet");

        aurelia.start().then(() => {
            aurelia.setRoot();
            resolve();
        });
    });
}