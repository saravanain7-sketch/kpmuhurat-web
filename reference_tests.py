from datetime import datetime
import server

LAT = 12 + 58/60 + 34/3600
LON = 80 + 11/60 + 1/3600
TZ = 5.5
START = datetime(2022,4,8,6,0,0)
END = datetime(2022,4,8,15,0,0)
EXPECTED = [
'09:07:31','09:14:46','09:23:26','09:31:16','09:34:30','09:43:47',
'09:46:35','09:49:52','09:58:20','10:05:53','10:14:55','10:23:03',
'10:26:24','10:36:01','10:38:55','10:43:45','10:52:28','11:00:15',
'11:09:30','11:17:49','11:21:14','11:31:02','11:33:58','11:38:52',
'11:42:18','11:50:09','11:59:28','12:07:48','12:11:14','12:21:02','12:23:58'
]
rows = server.transition_rows(START, END, LAT, LON, TZ)
actual = [r['time'] for r in rows]
missing = [x for x in EXPECTED if x not in actual]
if missing:
    raise SystemExit('Missing expected V1.5.11 transition times: '+', '.join(missing))
print('PASS: all screenshot reference transition times are reproduced.')
