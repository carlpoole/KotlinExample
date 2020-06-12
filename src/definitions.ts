declare module "@capacitor/core" {
  interface PluginRegistry {
    KotlinExample: KotlinExamplePlugin;
  }
}

export interface KotlinExamplePlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
