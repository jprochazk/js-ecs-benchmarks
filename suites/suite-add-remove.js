export default {
    name: 'Add/Remove',
    iterations: 10000,
    setup(ctx) {
        ctx.setup();
    },
    perform(ctx) {
        const entity = ctx.createEntity();

        ctx.addPositionComponent(entity);
        ctx.addVelocityComponent(entity);

        ctx.removePositionComponent(entity);
        ctx.removeVelocityComponent(entity);
    }
};