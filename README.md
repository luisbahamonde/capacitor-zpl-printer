# capacitor-zpl-printer

Connects with label printers that use the ZPL language

## Install

```bash
npm install capacitor-zpl-printer
npx cap sync
```

## API

<docgen-index>

* [`print(...)`](#print)
* [`echo(...)`](#echo)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### print(...)
```typescript
print(options: PrintOptions) => Promise<any>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>PrintOptions</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------

</docgen-api>
