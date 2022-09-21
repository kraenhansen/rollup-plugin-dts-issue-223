import { MyNamespace } from ".";

// Notice how this allows string assignment to a class, since the type alias 'Thing' circularly references itself.
const thing: MyNamespace.Thing = "w4t?";
