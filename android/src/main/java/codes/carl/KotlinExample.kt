package codes.carl

import com.getcapacitor.*

@NativePlugin
class KotlinExample : Plugin() {

    @PluginMethod
    fun echo(call: PluginCall) {
        val value = call.getString("value")
        val ret = JSObject()

        ret.put("value", value)
        call.success(ret)
    }
}