# KPMuhurat V1.5.11 — MSI extraction report

Source: kpMuhuratSetup_1.5.11_WithDB.msi
SHA-256: 461c4a9fa7c76da8ddc6948dd145fc57b3c4e31ba1a0f7e1b014850008ed00d5

## Extracted calculation resources
- Event rule stream: `_27420A5291FB4FDAB67D29A46A032397`
- Settings: `_5D7FF5C0C55742DF9994DECF203A7E91`
- Place database: `_4B1909F1953F487A86254A4F861EC78A`
- Main GUI assembly: `_EC95C5E6B3461C48AE17C82015F2F30A`
- Calculation assembly: `_EDDF7FB3829D26C9B526D905A9BB6271`
- Analysis assembly: `_EE8B3295D1E6FB9D4817DFCA8385E12F`
- Astro GUI assembly: `_63EDDE943B6B67BFE5CF9585EBDA4C82` / `_DED3107FCF7F3ED092F50D481CA3736D`

## Settings
<?xml version="1.0"?>
<Settings>
  <CreateLog Type="false" />
  <Ayanamsa Type="05" />
  <CharaRasi Type="false" />
  <ChartStyle Type="02" />
</Settings>

## Place database
{'country': 245, 'state': 3916, 'timezone': 387, 'place': 97875, 'defaultplace': 1}

Default Tirupati record:
(49011, 'Tirupati', 'IN', 'IN.02', 13, 39, 0, 'N', 79, 25, 0, 'E', 162, 'Asia/Calcutta', 0)

## Event rules
Parsed 80 event entries from the embedded event-rule data. The complete parsed rules are in `event_rules.json`.
The rule for `05. Speculative gain in Stock Market` is preserved exactly in raw numeric form, including:
`5:4:2:5:6:11:2:8:12`
`11:4:2:5:6:11:2:8:12`
and the four 101–104 rows.

## Important equivalence statement
This package contains extracted original data/resources and a web reconstruction. It is not the original binary/source code and should not be described as a byte-for-byte original copy.

The remaining engineering work is to implement the event-rule interpreter and the exact significator/CSL/Y-N/reason pipeline so the web output can be regression-tested against the Windows application's screenshots and live results.
