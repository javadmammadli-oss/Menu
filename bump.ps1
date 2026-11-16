# data.js-deki version nomresini 1 artirir ve saati yazir: "v7 . 17.11 01:05"
$f = Join-Path $PSScriptRoot "data.js"
$c = [IO.File]::ReadAllText($f, [Text.Encoding]::UTF8)
$m = [regex]::Match($c, 'version:\s*"v(\d+)[^"]*"')
$n = if ($m.Success) { [int]$m.Groups[1].Value + 1 } else { 1 }
$stamp = (Get-Date).ToString("dd.MM HH:mm")
$dot = [string][char]0x00B7
$new = 'version: "v' + $n + ' ' + $dot + ' ' + $stamp + '"'
if ($m.Success) { $c = $c.Remove($m.Index, $m.Length).Insert($m.Index, $new) }
[IO.File]::WriteAllText($f, $c, (New-Object Text.UTF8Encoding($false)))
Write-Output ("Versiya: v" + $n + " " + $stamp)
